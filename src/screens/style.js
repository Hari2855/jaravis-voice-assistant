const { StyleSheet } = require("react-native");
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    contiainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        // justifyContent: 'center'
    },
    txt1: {
        alignSelf: 'center',
        fontSize: wp(10),
        fontWeight: 'bold',
        color: 'gray',
        marginTop: '5%'
    },
    txt2: {
        fontSize: wp(4),
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'gray'
    },
    cont: {
        alignSelf: 'center',
        flexDirection: 'row'
    },
    img: {
        width: wp(75),
        height: wp(75),
        marginTop: '40%'
    },
    btn: {
        width: '90%',
        alignSelf: 'center',
        height: 50,
        backgroundColor: '#046f4c',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '40%'
    },
    txt3: {
        fontSize: wp(6),
        fontWeight: 'bold',
        color: '#ffffff',
    },
    cont2: {
        // flex: 1,
        marginHorizontal: 5
    },
    img2: {
        width: hp(15),
        height: hp(15),
        alignSelf: 'center'
    },
    contiainer2: {
        height: hp(60),
        marginTop: 5,
        // backgroundColor: 'red'
    },
    txt4: {
        fontSize: wp(6.5),
        fontWeight: '500',
        color: 'gray',
        marginLeft: 20
    },
    cont3: {
        padding: 4,
        backgroundColor: '#9bf0c7',
        width: '90%',
        alignSelf: 'center',
        marginTop: '5%',
        height: hp(16),
        borderRadius: wp(4),

    },
    cont4: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
    },
    img3: {
        height: hp(5),
        width: hp(5)
    },
    txt5: {
        fontSize: wp(4.8),
        color: 'gray',
        fontWeight: 'bold',
        marginLeft: 5
    },
    txt6: {
        fontSize: wp(3.8),
        color: 'gray',
        fontWeight: 'bold',
        marginLeft: 10,
        bottom: 5
    },
    txt7: {
        fontSize: wp(5),
        color: 'gray',
        fontWeight: 'bold',
        marginLeft: '7%'
    },
    contiainer3: {
        height: hp(60),
        backgroundColor: '#e0dfe1',
        width: wp(90),
        alignSelf: 'center',
        borderRadius: 15,
        padding: 5,
        marginTop: hp(1)
    },
    msgcont: {
        width: wp(60),
        backgroundColor: '#ffffff',
        marginTop: '5%',
        padding: 5,
        borderRadius: 10,
        borderTopRightRadius: 0
    },
    imgcont: {
        padding: 5,
        borderRadius: 8,
        backgroundColor: '#d8f2e9',
        borderTopLeftRadius: 0,
        marginTop: wp(5)
    },
    img4: {
        borderRadius: 10,
        resizeMode: 'contain',
        height: wp(60),
        width: wp(60)
    },
    img5: {
        width: hp(10),
        height: hp(10),
        borderRadius: hp(10),
        marginTop: hp(10)
    },
    clrbtn: {
        backgroundColor: '#787779',
        padding: 5,
        borderRadius: 20,
        position: 'absolute',
        right: 50,
        width: hp(7),
        alignItems: 'center',
        justifyContent: 'center',
        top: hp(13)
    }
})

export default styles