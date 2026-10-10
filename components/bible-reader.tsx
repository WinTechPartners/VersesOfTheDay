"use client";
import {useEffect,useState,useRef} from 'react';
type Book={name:string;id:string;chapters:number};
type Verse={number:number;text:string};
export default function BibleReader({onClose,onSelect}:{onClose:()=>void;onSelect?:(reference:string)=>void}){
const [viewMode,setViewMode]=useState('books'),[testament,setTestament]=useState('old'),[booksData,setBooksData]=useState<any>(null),[selectedBook,setSelectedBook]=useState<Book|null>(null),[selectedChapter,setSelectedChapter]=useState<number|null>(null),[verses,setVerses]=useState<Verse[]>([]),[translation,setTranslation]=useState('WEB'),[isLoading,setIsLoading]=useState(false),[booksLoading,setBooksLoading]=useState(true),[booksError,setBooksError]=useState<string|null>(null),[chapterError,setChapterError]=useState('');
const chapterRequest=useRef(0),contentRef=useRef<HTMLDivElement>(null),verseRefs=useRef(new Map<number,HTMLParagraphElement>());const selectedVerseNum=null,linkNotice='';
useEffect(()=>{setTranslation(localStorage.getItem('bibleVersion')||'WEB');fetch('/api/bible?action=books').then(r=>r.json()).then(setBooksData).catch(()=>setBooksError('Could not load books')).finally(()=>setBooksLoading(false))},[]);
async function loadChapter(book:Book,chapter:number,version=translation){const id=++chapterRequest.current;setSelectedBook(book);setSelectedChapter(chapter);setViewMode('reading');setIsLoading(true);setChapterError('');setVerses([]);try{const r=await fetch(`/api/bible?action=read&book=${encodeURIComponent(book.name)}&chapter=${chapter}&version=${version}`);const d:any=await r.json();if(id!==chapterRequest.current)return;if(!r.ok)throw Error(d.error);setVerses(d.verses)}catch(e){if(id===chapterRequest.current)setChapterError(e instanceof Error?e.message:'Chapter unavailable')}finally{if(id===chapterRequest.current)setIsLoading(false)}}
function handleTranslationChange(v:string){setTranslation(v);localStorage.setItem('bibleVersion',v);window.dispatchEvent(new Event('bible-version-changed'));if(selectedBook&&selectedChapter)void loadChapter(selectedBook,selectedChapter,v)}
useEffect(()=>{contentRef.current?.scrollTo(0,0)},[viewMode,selectedChapter]);
const books:Book[]=testament==='old'?booksData?.oldTestament:booksData?.newTestament;
  return (
    <div className="lifestages-reader relative flex h-[85dvh] overflow-hidden w-full flex-col bg-[#0c1929] max-w-md mx-auto shadow-2xl">
      {/* Header */}
      <header className="relative z-40 flex min-h-16 shrink-0 w-full items-center justify-between px-4 bg-[#0c1929]/95 backdrop-blur-sm border-b border-white/10">
        <button
          onClick={() => {
            chapterRequest.current++
            
            setIsLoading(false)
            if (viewMode === "reading") setViewMode("chapters")
            else if (viewMode === "chapters") setViewMode("books")
            else onClose()
          }}
          className="flex size-10 items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        
        <h1 className="text-lg font-bold text-white">
          {viewMode === "books" && "The Bible"}
          {viewMode === "chapters" && selectedBook?.name}
          {viewMode === "reading" && `${selectedBook?.name} ${selectedChapter}`}
        </h1>
        
        {/* Translation Selector */}
        <div className="flex items-center gap-2">
          <select
            value={translation}
            onChange={(e) => handleTranslationChange(e.target.value)}
            className="bg-white/10 text-white text-sm rounded-lg px-2 py-1 border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            {booksData?.translations?.map((t:any) => (
              <option key={t.id} value={t.id} className="bg-[#0c1929] text-white">
                {t.abbr}
              </option>
            ))}
          </select>
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto pb-8 scroll-pt-4" ref={contentRef}>
        {linkNotice && <p className="p-4 text-blue-100 text-sm" role="status">{linkNotice}</p>}
        {/* BOOKS VIEW */}
        {viewMode === "books" && (
          <div className="p-4">
            {/* Testament Tabs */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setTestament("old")}
                className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all ${
                  testament === "old"
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                    : "bg-white/10 text-white/70"
                }`}
              >
                Old Testament
              </button>
              <button
                onClick={() => setTestament("new")}
                className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all ${
                  testament === "new"
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                    : "bg-white/10 text-white/70"
                }`}
              >
                New Testament
              </button>
            </div>

            {/* Loading State */}
            {booksLoading && (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="size-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mb-3"></div>
                <p className="text-blue-200/70">Loading books...</p>
              </div>
            )}

            {/* Error State */}
            {booksError && (
              <div className="flex flex-col items-center justify-center py-20">
                <span className="material-symbols-outlined text-red-400 text-4xl mb-3">error</span>
                <p className="text-red-400">Failed to load: {booksError}</p>
              </div>
            )}

            {/* Book Grid */}
            {!booksLoading && !booksError && (
              <div className="grid grid-cols-2 gap-2">
                {books?.map(book => (
                  <button
                    key={book.id}
                    onClick={() => {
                      setSelectedBook(book)
                      setViewMode("chapters")
                    }}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors text-left"
                  >
                    <div className="size-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-amber-400 text-lg">
                        {testament === "old" ? "auto_stories" : "menu_book"}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-sm truncate">{book.name}</p>
                      <p className="text-blue-200/50 text-xs">{book.chapters} chapters</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* CHAPTERS VIEW */}
        {viewMode === "chapters" && selectedBook && (
          <div className="p-4">
            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: selectedBook.chapters }, (_, i) => i + 1).map(chapter => (
                <button
                  key={chapter}
                  onClick={() => loadChapter(selectedBook, chapter)}
                  disabled={isLoading}
                  className="aspect-square flex items-center justify-center bg-white/5 rounded-xl border border-white/10 hover:bg-amber-500/20 hover:border-amber-500/40 transition-colors text-white font-medium disabled:opacity-50"
                >
                  {chapter}
                </button>
              ))}
            </div>
          </div>
        )}

        {onSelect&&viewMode==='reading'&&<p className="text-center text-blue-200/70 text-sm p-3">Tap a verse to read its context.</p>}
        {/* READING VIEW */}
        {viewMode === "reading" && (
          <div className="p-5 select-text">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="size-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mb-3"></div>
                <p className="text-blue-200/70">Loading chapter...</p>
              </div>
            ) : chapterError ? (
              <p role="alert" className="text-center text-blue-200 py-10">{chapterError}</p>
            ) : (
              <div className="space-y-4">

                
                {verses.length === 0 && (
                  <p className="text-center text-blue-200/50 py-10">No verses found</p>
                )}
                {verses.map(verse => (
                  <p 
                    key={verse.number}
                    onClick={()=>{if(onSelect&&selectedBook&&selectedChapter)onSelect(`${selectedBook.name} ${selectedChapter}:${verse.number}`)}} 
                    ref={el => {
                      if (el) verseRefs.current.set(verse.number, el)
                      else verseRefs.current.delete(verse.number)
                    }}
                    
                    className={`whitespace-pre-line text-blue-100/90 text-[17px] leading-relaxed cursor-pointer rounded-lg px-2 py-1 -mx-2 transition-colors ${
                      selectedVerseNum === verse.number 
                        ? "bg-amber-500/20 border-l-2 border-amber-400" 
                        : "hover:bg-white/5 active:bg-amber-500/10"
                    }`}
                  >
                    <span className="text-amber-400 font-bold text-sm mr-2 align-super select-none">
                      {verse.number}
                    </span>
                    {verse.text}
                  </p>
                ))}
                
                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 pb-4 border-t border-white/10">
                  <button
                    onClick={() => {
                      if (selectedChapter && selectedChapter > 1) {
                        loadChapter(selectedBook!, selectedChapter - 1)
                      }
                    }}
                    disabled={!selectedChapter || selectedChapter <= 1}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-white disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <span className="material-symbols-outlined text-lg">chevron_left</span>
                    Previous
                  </button>
                  
                  <button
                    onClick={() => {
                      if (selectedChapter && selectedBook && selectedChapter < selectedBook.chapters) {
                        loadChapter(selectedBook, selectedChapter + 1)
                      }
                    }}
                    disabled={!selectedChapter || !selectedBook || selectedChapter >= selectedBook.chapters}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-white disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Next
                    <span className="material-symbols-outlined text-lg">chevron_right</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

    </div>
  )
}
