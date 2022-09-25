import React,{useState} from "react";
import {  Text, View,TextInput,TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import styles from './InputModal.style';

const InputModal=({isVisible,onClose,onSend})=>{
    const [text,setText]=useState(null);
    const [content,setContent]=useState(null);
    function handleSend(){
        if(!text)
        {
            return;
        }
        onSend(text,content);
        setText(null);
    }

    return(

            <Modal 
            isVisible={isVisible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
             >
           <View style={styles.container}>
           <View style={styles.inner_container}>
            <TextInput 
            placeholder="Title" 
            onChangeText={e=>setText(e)} multiline />
            <TextInput 
            placeholder="Content" 
            onChangeText={e=>setContent(e)} multiline />

            </View>
            <View style={styles.btnEkle}>
            <TouchableOpacity onPress={handleSend}>
                <Text>Send</Text>
            </TouchableOpacity>
            </View>
           </View>
            
            

            </Modal>
      
    )

}
export default InputModal;