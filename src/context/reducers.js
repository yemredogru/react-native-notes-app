import AsyncStorage from '@react-native-async-storage/async-storage';
export default function reducers(state,action){
    switch(action.type){
        case "SET_NOTE":
            const {note,content}=action.payload;
            var myArray=new Object();
            
            state.books?
            myArray=state.books.concat(new Object({content:content,title:note,createdAt:new Date().toLocaleString()})):
            myArray.content=content;
            myArray.title=note;
            myArray.createdAt=new Date().toLocaleString()
             AsyncStorage.setItem('@USER',JSON.stringify(myArray))
             console.log(myArray)
            return {...state, books: myArray};
        case "REMOVE_NOTE":
            const removeNote=action.payload.note;
            const newValues=state.books.filter((e)=>e.content!=removeNote.content);
            AsyncStorage.setItem('@USER',JSON.stringify(newValues))
            return {...state,books:newValues}

            
            
            
  
            
  
        default:
            return state;
    }
}