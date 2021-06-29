import React,{useState} from 'react';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import Slide from 'react-reveal/Slide';

const Table = ({ dataArray }) => {
    const [sortType, setSortType] = useState(false);
    const tableData = dataArray;
    const sorted = (basis) => {
        console.log(basis);
        if (basis === "total") {
            if (sortType === true) {
                tableData.sort((a, b) => {
                    return b.confirmed -a.confirmed;
                })
            }
            else if (sortType === false) {
                tableData.sort((a, b) => {
                    return a.confirmed - b.confirmed;
                })
            }
        }
        else if (basis === "recovered") {
            if (sortType === false) {
                tableData.sort((a, b) => {
                    return b.recovered - a.recovered;
                })
            }
           else  if (sortType === true) {
                tableData.sort((a, b) => {
                    return a.recovered - b.recovered;
                })
            }
        }
        else if (basis === "deaths") {
            if (sortType === false) {
                tableData.sort((a, b) => {
                    return b.deaths - a.deaths;
                })
            }
           else  if (sortType === true) {
                tableData.sort((a, b) => {
                    return a.deaths - b.deaths;
                })
            }
        }
        else if (basis === "active") {
            if (sortType === false) {
                tableData.sort((a, b) => {
                    return b.active - a.active;
                })
                // console.log(tableData);
            }
             else if (sortType === true) {
                tableData.sort((a, b) => {
                    return a.active - b.active;
                })
                // console.log(tableData);
            }
        }
        setSortType(!sortType);
    }

    return (
        <>
            <table>
                <thead>
                    <tr className="table_head">
                    <th>State </th>
                    <th onClick={() =>{sorted("total")}} >Total Cases <SwapVertIcon/></th>
                    <th onClick={() =>{sorted("active")}}>Active Cases <SwapVertIcon/></th>
                    <th onClick={() =>{sorted("recovered")}}>Recovered <SwapVertIcon/></th>
                    <th onClick={() =>{sorted("deaths")}}>Deaths <SwapVertIcon/></th>
                    </tr>
                </thead>
                <tbody>
                {
                    tableData.map((data,key) => {
                        if (data.state !== "Total" && data.state!=="State Unassigned") {
                                return (
                                    <>
                                         <Slide left>
                                        <tr key={key}>
                                            <td> {data.state}</td>
                                            <td> {data.confirmed}</td>
                                            <td> {data.active}</td>
                                            <td> {data.recovered}</td>
                                            <td> {data.deaths}</td>
                                        </tr>
                                        </Slide>
                                    </>
                                )
                        }
                        else {
                            return null;
                        }
                        })

                }
                </tbody>
                </table>
        </>
    )
}
export default Table;