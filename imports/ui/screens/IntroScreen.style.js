import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height:'100%',
        width:'100%',
        backgroundColor: '#FFFFFF',
      },
      logo:{
        marginTop:50,
        resizeMode: 'contain',
        height: 70,
        width:'100%'
      },
      intro_image:{
        marginTop:-20,
        resizeMode: 'contain',
        height: '70%',
        width:'100%',
      },
      welcome_text:{
        marginTop:-30,
        width:'100%',
        fontSize:25,
        textAlign:"center",
        color:"#000000"
      },
      user_name_text:{
        fontFamily: 'tempus_sans_itc',
        fontSize:50,
        textAlign:"center",
        color:"#ff0000"
      }
  });