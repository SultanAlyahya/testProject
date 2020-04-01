import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import SettingsLine from '../reusableComponents/settingsLine'

export default class volunteerHomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            token:this.props.navigation.state.params.token || true,
            name:this.props.navigation.state.params.name || true,
        }
    }
    render(){
        const a =()=>{
            console.log(this.state.token)
        }
        var id=0
        const settings= [{title:"account", id:'1'},{title:'help', id:'2'},{title:'change password', id:'3'},{title:'totorial', id:'4'},{title:'enable/disable calls', id:'5'},{title:'feedback to developers', id:'6'},{title:'view my statisctics', id:'7'},{title:'logout',id:'8'}]
        return(
            <View style={styles.Scontainer}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>Hello {this.state.name}</Text>
                </View>
                <FlatList
                    data={settings}
                    renderItem={({ item }) =>  <SettingsLine title={item.title}/>}
                    keyExtractor={item => item.id}
                />

                <TouchableOpacity
                onPress={()=>a()}>
                    <Text>token</Text>
                </TouchableOpacity>

               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Scontainer:{
        flex:1,
    },
    header:{
        width:'100%',
        height:'20%',
        alignItems:'center',
        justifyContent:'center',
    },
    textHeader:{
        fontSize:50,
        color:'#333333'
    },
})