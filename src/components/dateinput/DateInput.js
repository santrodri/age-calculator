import { useState } from 'react'
import icon from '../../templates/images/icon-arrow.svg'
import '../../templates/styles/dateinput/DateInput.scss'

function DateInput(){
    const [day, setDay] = useState(null)
    const [month, setMonth] = useState(null)
    const [year, setYear] = useState(null)

    const dateIsValid = () => {}

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        console.log(e.target.querySelector('#day-input').value);
        console.log(e.target.querySelector('#month-input').value);
        console.log(e.target.querySelector('#year-input').value);
    }

    /* Falta manipular os dias e terminar o sistema de datas */
      


    return (
        <form onSubmit={(e) => (handleSubmit(e))}>
            <div className="container-inputs">
                <div className='container'>
                    <p>
                        DAY
                    </p>
                    <input
                        type='number' 
                        placeholder='DD'
                        name = 'day-input'
                        id = 'day-input'
                        onChange={(e) => {setDay(e.target.value)}}
                    >
                    </input>
                </div>
                
                <div className='container'>
                    <p >
                        MONTH
                    </p>
                    <input 
                        type='number'
                        placeholder='MM'
                        onChange={(e) => setMonth(e.target.value)} 
                        name='month-input'
                        id='month-input'   
                    >
                    </input>
                </div>
                
                <div className='container'>
                    <p>
                        YEAR
                    </p>
                    <input 
                        type='number'
                        placeholder='YYYY'
                        onChange={(e) => setYear(e.target.value)}    
                        name='year-input'
                        id='year-input'
                    >
                    </input>
                </div>
            </div>
           <button className='container-img'>
                <img 
                    src={icon}
                    alt='icon'
                >
                </img>
           </button>
            
        </form>
        
    )
}

export default DateInput