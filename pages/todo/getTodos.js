import axios from "axios";
import React, { useEffect, useState } from "react";
import TableStyle from "../common/styles/table.module.css"

export default function GetTodo(){

    const columns = ["할일"]
    const [data, setData] = useState('')
    useEffect(()=>{
        axios.get('http://localhost:5000/api/todo/getTodo').then(res=>{
            setData(res.data.todos)
    }).catch(err=>{})
},[])
    return(
        <table className={TableStyle.table}>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <td key={index} >{column}</td>
                    ))}
                    <td>
                        할일목록
                    </td>
                </tr>
            </thead>
            <tbody>
                    {data.length == 0 ?<tr>
                                        <td colSpan={1}>등록된 일정이 없습니다</td>   
                                        </tr>    
                    :data.map((todo) => (
                        <tr key={todo.task}>
                        <td>
                            <input type="checkbox"></input>
                            <a>{todo.task}</a>
                        </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}