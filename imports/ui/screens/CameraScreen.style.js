
import { StyleSheet , Dimensions} from 'react-native';

export default StyleSheet.create({
    container: {
        height:'100%',
        width:'100%',
        backgroundColor: '#FFFFFF',
      },
      sample_text:{
        fontFamily: 'tempus_sans_itc',
        fontSize:50,
        textAlign:"center",
        color:"#ff0000"
      },
      preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
      },
      capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
      }
  });