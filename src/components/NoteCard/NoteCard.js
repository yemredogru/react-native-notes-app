import React from "react";
import { View,Text,TouchableOpacity,Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './NoteCard.style';

const NoteCard=({desc})=>{
    const dispatch = useDispatch()
    const removeNote=()=>{
        console.log("girdi")
        dispatch({type:'REMOVE_NOTE', payload:{note:desc}})
    }
    return(

<TouchableOpacity style={styles.container}  onLongPress={removeNote} >
            <Text style={styles.title} >Title : {desc.title}</Text>
            <Text style={styles.text} >{desc.content}</Text>
            <View style={styles.inner_container}>
            <Text style={styles.createdAt} >Created At : {desc.createdAt}</Text>
            </View>
            </TouchableOpacity>
            
       
    )
}
export default NoteCard;