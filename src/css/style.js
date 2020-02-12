import { StyleSheet } from 'react-native';
import config from 'react-native-config';

const PRIMARY_COLOR = config.APP_PRIMARY_COLOR;
const CONTAINER_COLOR = config.CONTAINER_COLOR;
const TEXT_COLOR = config.TEXT_COLOR;
const TEXT_BOX_COLOR = config.TEXT_COLOR;
const NAVIGATION_COLOR = config.NAVIGATION_COLOR;

var styles = StyleSheet.create({
  container: {
    backgroundColor: CONTAINER_COLOR,
  },
  footertext:{
    color:PRIMARY_COLOR,
    fontWeight:'bold',
    textAlign:'center',
  },
  drawerFooter:{
    flex:1,
    alignItems:'flex-end',
    justifyContent:'flex-end',
    width:'100%',
    position:'absolute',
    bottom:0,
  },
  footer:{
    // position:'absolute',
    bottom:0,
    width:'100%',
  },
  overflow:{
    flex:1,
  },
  wrapper: {
    alignItems:'center',
  },
  textColor:{
    color:TEXT_COLOR,
  },
  headerStyle:{
    backgroundColor: PRIMARY_COLOR,
    shadowOpacity: 0,
    elevation: 0,
  },
  headerTintColor:{
    color:TEXT_COLOR
  },
  MaterialTopTabNavigatorLabelStyle: {
    textAlign: 'center',
    fontSize:16,
  },
  MaterialTopTabNavigatorIndicatorStyle: {
    borderBottomColor: TEXT_BOX_COLOR,
    borderBottomWidth: 2,
  },
  MaterialTopTabNavigatorStyle: {
    backgroundColor: PRIMARY_COLOR,
  },
  LoginLogoStyle:{
    width:320,
  },
  leftIconContainerStyle:{
    marginRight:10,
    minWidth:40,
  },
  inputMainContainer:{
    marginBottom:20,
  },
  buttonStyle:{
    backgroundColor:PRIMARY_COLOR,
    height:50,
    width:'90%',
    borderRadius:30,
  },
  shareButtonStyle:{
    backgroundColor:PRIMARY_COLOR,
    marginTop:20,
  },
  LoginLogoContainer:{
      alignItems:'center',
  },
  buttonContainerStyle:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle:{
    borderWidth:0,
  },
  inputContainer: {
      backgroundColor: TEXT_BOX_COLOR,
      borderRadius:30,
      width:'95%',
      height:50,
      borderBottomWidth:0,
  },
  socialWrapper:{
    marginTop:50,
    paddingHorizontal:'5%'
  },
  btnGroupContainer:{
    backgroundColor:'rgba(0,0,0,0.1)',
    borderWidth:0,
  },
  btnGroupSelectedButton:{
    backgroundColor:config.APP_PRIMARY_COLOR,
  },
  btnGroupButton:{
      borderWidth:0,
  },
  btnGroupInnerBorder:{
    width:0
  },
  loginCardStyle:{
    marginVertical:50,
    paddingVertical:20,
    borderRadius:20,
    borderWidth:0,
    backgroundColor:'rgba(0,0,0,0.1)',
    zIndex:10,
    position:'relative',
  },
  loginPointer:{
    left:50,
  },
  registerPointer:{
    right: 50,   
  },
  circlePointer:{
    backgroundColor:'rgba(0,0,0,0.1)',
    zIndex:1,
    width:100,
    height:50,
    position:'absolute',
    borderTopLeftRadius:800,
    borderTopRightRadius:800,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
  },
  uploadHeader: {
    backgroundColor: PRIMARY_COLOR,
    height:200,
    paddingHorizontal:3,
  },
  galleryHeader:{
    backgroundColor: PRIMARY_COLOR,
    paddingTop:3,
    paddingBottom:10,
  },
  avatar: {
    borderRadius: 300,
    borderWidth: 3,
    borderColor: TEXT_COLOR,
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130,
  },
  avatarStyle:{
    backgroundColor:PRIMARY_COLOR
  },
  red:{
    backgroundColor:'red',    
  },
  UploadBody:{
    marginTop:40,
  },
  UploadBodyContent: {
    alignItems: 'center',
    paddingVertical:30,
    marginTop:40,
  },
  UploadPicName:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600",
    marginBottom:20,
  },
  textArea:{
    minHeight:200,
  },
  uploadHeading:{
    color:TEXT_COLOR,
    fontSize:26,
    textAlign:'center',
    marginTop:50,
    fontWeight:'bold',
  },
  galleryHeading:{
    color:TEXT_COLOR,
    fontSize:26,
    textAlign:'center',
    marginTop:10,
    fontWeight:'bold',
  },
  buttonIconStyle:{
    marginRight:10,
  },
  datePicker:{
    width:'90%',
    marginBottom:20,
  },
  dateInput:{
    justifyContent:'center',
    alignItems: 'flex-start',
    paddingLeft:70,
    paddingTop:10,
    borderWidth:0,
  },
  dateText:{
    color:'#7D848C',
    fontSize:17,
  },
  dateIcon: {
    position:'absolute',
    left:20,
    top:12,
  },
  dateCrossIcon:{
    flexDirection: "row",
    width:'88%',
    justifyContent:'flex-end',
  },
  clearText:{
    marginLeft:2,
    color:PRIMARY_COLOR,
  },
  galleryContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  uploadSubHeading: {
    color:CONTAINER_COLOR,
    textAlign:'center',
    marginTop:15,
    fontSize:20,
  },
  gallerySpecificImage: { flex: 1, flexDirection: 'column', margin: 1 },
  cardTitle:{color:PRIMARY_COLOR},
  postedButton:{
    color:PRIMARY_COLOR,
    fontStyle:'italic',
    fontSize:13,
  },
  postedButtonStyle:{
    alignItems:'flex-end',
  },
  loader:{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0,0,0,0.5)'},
  drawerSignOutContainer: {width:180,position:'absolute',bottom:0,marginBottom:40,alignItems:'flex-start'},
  drawerItemStyle: {
    borderBottomWidth:1,
    borderBottomColor:TEXT_COLOR,
  },
  dashboardList:{
    backgroundColor:PRIMARY_COLOR,
    paddingVertical:15,
    paddingHorizontal:15,
    borderRadius:4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    margin:10,
    width:'46%'
  },
  dashboardListText:{
    color:TEXT_COLOR,
    fontSize:16,
    marginTop:10,
  },
  drawerFirstContainer:{backgroundColor:CONTAINER_COLOR,height:100,marginBottom:80},
  drawerInfo:{position:'absolute',bottom:0},
  drawerName:{color:NAVIGATION_COLOR,fontSize:22,marginLeft:6},
  drawerEmail:{color:NAVIGATION_COLOR,fontSize:14,marginLeft:6},
});

module.exports = styles;