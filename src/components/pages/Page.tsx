import React from 'react';
import {PagesType} from "../../data/dataState";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import Button from '@mui/material/Button';
import {Container} from "@mui/material";

type PropsType = {
    pages: PagesType[]
}

export const Page: React.FC<PropsType> = ({pages}) => {
    const params = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)

    const comeback = () => {
        navigate(-1);
    }
    const navigateMainPage = () => {
        navigate("/page/0")
    }

    return (
        <div>
            {location.pathname === '/page/0' && <div>SECRET TEXT</div>}
            {pages[Number(params.id)]
                ? <div>
                    {pages[Number(params.id)].heading}
                    {pages[Number(params.id)].about}
                </div>
                //: <Error404/>
                : <Navigate to={'/page/error'}/>
            }
            <Container maxWidth="sm" style={{display: "flex", gap: "10px"}}>
                <Button variant="contained" onClick={comeback}>Back</Button>
                <Button variant="contained" onClick={navigateMainPage}>Main Page</Button>
            </Container>


        </div>
    );
};

