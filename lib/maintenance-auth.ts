import {getChatGPTUser} from '@/app/chatgpt-auth';
import {secret} from './store';
export async function canMaintain(req:Request){
 if(secret('IMPORT_TOKEN')&&req.headers.get('authorization')===`Bearer ${secret('IMPORT_TOKEN')}`)return true;
 const user=await getChatGPTUser();
 return !!user&&!!secret('OWNER_USER_ID')&&user.userId===secret('OWNER_USER_ID');
}
