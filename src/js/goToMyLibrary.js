import logIn from "./logIn";

if (global.currentUser) {
//Тут візов фунции перехода в MyLibrary
//...
} else {
    logIn().then((resolve) => {
        global.currentUser = resolve;
        console.log(global.currentUser);
//Тут візов фунции перехода в MyLibrary
//...
    }).catch((reject) => {
//Тут візов сообщения ошибки авторизации
//...
    console.log(reject);
});
}