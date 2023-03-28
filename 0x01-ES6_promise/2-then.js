export default function handleResponseFromAPI(promise){
    promise.then((message)=>{
        console.log('Got a message from the API');
    })
}