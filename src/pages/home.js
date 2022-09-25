import React,{useEffect, useState} from "react";
import { View,Text,Button,FlatList } from "react-native";
import InputModal from "../components/Modal/InputModal";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoteCard from "../components/NoteCard/NoteCard";

const HomeScreen=()=>{
    const [modalVisible, setModalVisible] = useState(false);
    const selector=useSelector(s=>s.books)
    
    
    const dispatch = useDispatch()
    const deleteJob = (text,content) => {
        dispatch({type:'SET_NOTE', payload:{note:text,content:content}})
        handleToggle();
    }
    function handleToggle(){
        setModalVisible(!modalVisible);
    }
    const renderCard = ({item})=><NoteCard desc={item}/>
    return(
        <View style={{flex:1}}>
            {
                selector && (
                    <FlatList 
                    key={'_'}
                    data={selector} renderItem={renderCard} keyExtractor={(item, index) => 'key'+index} numColumns={2}  />
                )
            }
            <View style={{borderWidth:1,position:'absolute',bottom:0,alignSelf:'flex-end',borderRadius:5}}>
        <Button   onPress={handleToggle} title="ADD" color="gray" />
            </View>
            
            <InputModal onClose={handleToggle} isVisible={modalVisible} onSend={deleteJob} />
        </View>
    )
}
export default HomeScreen;
