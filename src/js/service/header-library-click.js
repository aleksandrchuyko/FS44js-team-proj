import { logIn } from '../service/login';
import { onRenderLibrary } from '../markup/render-watched'

export async function onClickHeaderLibraryBth(e) {
    let page = 1;
    if (!global.userId) {
        await logIn()
    }
    await onRenderLibrary(page);
}