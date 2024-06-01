import LogoHeader from '../Assets/Logo.svg';
import Button from '../Assets/button.svg'
import Daily from '../Assets/DailyJobs.svg'
import Photoblock from '../Assets/Photoblock.svg'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Header from '../Components/Header/Header';
import { Daily_Img, Organize_Img, PhotoBlock_Img, Principal_Container, SecondBlock, InternBlock, Only_P, ThirdBlock_div } from './Styled';
import ToDoList from '../Components/To-Do List/ToDoList';
import Teste from '../Components/TESTE/Teste';
// import Teste from '../Components/TESTE/Teste';

const HomePage = () =>{
    return(
        <Principal_Container>
             <DndProvider backend={HTML5Backend}>
                <Header/>
                <SecondBlock>
                    <InternBlock>
                        <Organize_Img src={Daily}/>
                        <Only_P>The only way to get things done</Only_P>
                        <img src = {Button}></img>
                    </InternBlock>    
                    <PhotoBlock_Img src={Photoblock}/>
                
                </SecondBlock>    
                <ThirdBlock_div>
                    <img src={LogoHeader}/>
                </ThirdBlock_div>
                <ToDoList/>
                <Teste/>
            </DndProvider>
        </Principal_Container>
    )
}

export default HomePage;