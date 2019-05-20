import React from 'react';
import MainPageContents from '../MainPageContents/MainPageContents'
import './Main_Page.css';
const MainPage = (props) => {
    return(
        <div>
        <MainPageContents name ={"vishal gade"} /><br></br>
        <MainPageContents name = {"portfolio"} /><br></br>
        <MainPageContents name = {"resume"} />
        </div>
    );
}
export default MainPage;