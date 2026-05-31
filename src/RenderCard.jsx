import React, { useState } from 'react';

export function renderCard(task, index, filterStat, filterCat) {

    const [status, setCategory] = useState(task.Status);

    if((filterStat === task.Status || filterStat === "Любой") &&
        (filterCat === task.Category || filterCat === "Любой"))
    {
        return (
        <div key={index} className="square-task-card">
            <div className="card-content">
                <div className="task-header">
                <h2 className="movie-title">{task.Name}</h2>
            </div>
                <p className="task-category">{task.Category}</p>

                <p className="task-status">{status}</p>
            </div>

            <div>
                <button 
                onClick={()=> setCategory(prev => ChangeStat(status))}>
                    Сменить состояние</button>
            </div>
        </div>
        );
    }else{
        return <></>
    }
}

function ChangeStat(stat)
{
    if(stat = "В планах")
    {
        return "В процессе";
    }else if(stat = "В процессе")
    {
        return "Готово";
    }else if(stat = "Готово")
    {
        return "В планах"
    }else
    {
        return stat
    }
}

export default renderCard