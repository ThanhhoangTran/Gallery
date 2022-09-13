import { useState } from "react";

function SearchBav({params, onChangeField}){
    return (
        <div>
            <input type="text" placeholder="Enter type search..." value={params.q} onChange={onChangeField('q')}/>
            <input type="number" placeholder="Number Of Per Page" value={params.per_page} onChange={onChangeField('per_page')}/>
            <select onChange={onChangeField("category")}>
                <option value="backgrounds">backgrounds</option>
                <option value="fashion">fashion</option>
                <option value="science">science</option>
                <option value="education">education</option>
            </select>
        </div>
    )
}
export default SearchBav;