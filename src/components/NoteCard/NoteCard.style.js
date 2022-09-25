import { StyleSheet ,Dimensions} from "react-native";
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
    container:{
        backgroundColor:'gray',
        borderRadius:10,
        height:200,
        width:deviceSize.width/4,
        margin:20,
        flex:1,
    },
    text:{
        margin:10,
        textAlign:'center',
        fontSize:16,
        marginTop:deviceSize.height/12,
    },
    inner_container:{
        position:'absolute',
        right:5,
        bottom:0,
        borderRadius:10,
        left:5,
        margin:2,
        padding:2,
        backgroundColor:'green',
        alignItems:'center',
    },
    createdAt:{
        fontSize:12,
        textAlign:'center',
        
        
    },
    title:{
        fontSize:16,
        textAlign:'center',
    }
    
});