import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data:[],
            redirectToReferrer: false,
            username:'',
            password:'',
            name:'',
            email:''
        };

        this.getUserFeed = this.getUserFeed.bind(this);
        this.logout = this.logout.bind(this);
       

    }

    componentWillMount() {

        if(sessionStorage.getItem("userData")){
            this.getUserFeed();
        }

        else{
        this.setState({redirectToReferrer: true});
        }

    }


    getUserFeed() {

        let data = JSON.parse(sessionStorage.getItem("userData"));
        this.setState({name:data.userData.name});
        this.setState({email:data.userData.email});
        this.setState({username:data.userData.username});
        this.setState({password:data.userData.password});

        let postData = {id: data.userData.id};

        if (data) {
            PostData('feed', postData).then((result) => {
            let responseJson = result;
                if(responseJson.feedData){
                    this.setState({data: responseJson.feedData});
                    console.log(this.state);
                }
            });
        }
    }

    logout(){
        sessionStorage.setItem("userData",'');
        sessionStorage.clear();
        this.setState({redirectToReferrer: true});
        }

    render() {
        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/login'}/>)
        }

        return (
            <div className = "row">
                        <table className = "table table-striped">
                            

                            <thead>
                                <tr>
                                    <th> User Id </th>
                                    <th> User Name</th>
                                    <th> Name </th> 
                                    <th> Email </th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.data.map(
                                        data1 => 
                                        <tr key = {data1.id}>
                                             <td> {data1.id}</td>
                                             <td> {data1.username} </td>   
                                             <td> {data1.name}</td>
                                             <td> {data1.email}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                            
                        </table>
                        <a href="http://localhost:3000/" onClick={this.logout} className="logout">Logout</a>
                        </div>
        );
    }
}

export default Home;