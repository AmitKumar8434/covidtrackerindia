import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';
import Header from './Header';
import Table from './Table';
import Footer from './Footer'


const Covid = () => {
    const [data, setData] = useState([]);
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        fetchApi();
    },[]);
    const fetchApi = async () => {
        try {
            const api = `https://api.covid19india.org/data.json`;
            const response = await fetch(api);
            const jsonval = await response.json();
            setData(jsonval.statewise[0]);
            setTableData(jsonval.statewise);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <Header />
            <h1 className="live"><span className="live_text">Stay Safe and Get Vaccinated today😷</span> </h1>
            <div className="container">
            <Card text="Total Cases" number={data.confirmed} border="2px solid blue" textColor="blue"/>
            <Card text="Active Cases" number={data.active} border="2px solid #de14d4" textColor="#de14d4" />
            <Card text="Recovered" number={data.recovered} border="2px solid purple"  textColor="purple"/>
            <Card text="Deaths" number={data.deaths} border="2px solid green" textColor="green"/>
            </div>
            <div className="heading">State Wise List Of Covid-19 Details <span className='last'>(Last Updated:{data.lastupdatedtime})</span></div>
            <div className="table_container">
                <Table dataArray={tableData}/>
            </div>
            <Footer/>
            
        </>
    )
}
export default Covid;