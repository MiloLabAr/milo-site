import React from 'react';
import { useState, CSSProperties, MouseEvent } from 'react';
import styles from './Input.module.scss';
import { AiOutlineArrowDown } from 'react-icons/ai';

interface InputProps{
    //name : string;
    type : string;
    label : string;
    value : string;
    setValue(v:string) : void;
    backgroundColor? : string;
    borderColor? : string;
    focusColor? : string;
    contentColor? : string;
    labelColor? : string;
    animated? : boolean;
    className? : string;
    style? : CSSProperties;
    options? : string[];
    selectedColor? : string;
    multiple? : boolean;
}

const Input = ({ type='text', label, value, setValue, backgroundColor='', borderColor='', focusColor='', contentColor='', labelColor='', animated=true, className, style, options=[''], selectedColor='#000', multiple=false }:InputProps) => {

    const initialStyles = {
        input : {
            borderColor,
            backgroundColor,
            color: contentColor
        },
        label : {
            color: animated ? borderColor : labelColor,
            backgroundColor : animated ? backgroundColor : 'transparent'
        }
    }

    const [labelStyles, setLabelStyles] = useState<CSSProperties>(initialStyles.label);
    const [inputStyles, setInputStyles] = useState<CSSProperties>(initialStyles.input);

    const handleFocus = () => {
        setInputStyles({
            ...inputStyles,
            borderColor : focusColor
        })
        if(animated){
            setLabelStyles({
                ...labelStyles,
                color: focusColor
            });
        }
    }

    const handleBlur = () => {
        setInputStyles(initialStyles.input);
        setLabelStyles(initialStyles.label);
    }

    //SELECT FUNCTIONS

    const [display, setDisplay] = useState<boolean>(false);

    const isOptionSelected = (option:string) => value.split(';').some(selectedOption => option === selectedOption);

    const handleSelectOption = (e:MouseEvent, option:string) => {
        e.preventDefault();
        if(isOptionSelected(option)){
            setValue(value.replace(`${option};`, ''));
        }
        else{
            setValue(`${value}${option};`);
        }
    }

    const displayOptions = (e:MouseEvent) => {
        e.preventDefault();
        setDisplay(!display);
    }

    return type === 'textarea' ? (
        <div className={`${styles['input-container']} ${!animated ? styles['normal'] : styles['animated']} ${className}`}>  
            <textarea
                placeholder=' ' 
                value={value} 
                onChange={e=>setValue(e.target.value)} 
                onFocus={handleFocus} 
                onBlur={handleBlur}
                style={inputStyles} 
            />
            <label style={labelStyles}>{label}</label>
        </div>
    ) :
    type === 'toggle' ? (
        <div className={`${styles['toggle-container']} ${className}`}>
            <label style={labelStyles}>{label}</label>
            <div className={styles['buttons-container']}>
                <button className={value === options[0] ? styles.selected : ''} onClick={(e)=>{setValue(options[0]);e.preventDefault();}}>{options[0]}</button>
                <button className={value === options[1] ? styles.selected : ''} onClick={(e)=>{setValue(options[1]);e.preventDefault();}}>{options[1]}</button>
            </div>
        </div>
    ) : 
    type === 'select' ? (
        <div className={`${styles['select-container']} ${className}`}>
            <label style={labelStyles}>{label}</label>
            <div className={styles.select}>
                <input type="text" value={value} style={inputStyles} />
                <button onClick={displayOptions}>
                    <AiOutlineArrowDown style={{transform: `rotate(${display ? '-180deg' : '0deg'})`}}/>
                </button>
                <div className={styles.options} style={{height: 40*options.length}}>
                {
                    options.map((option, i) => (
                        <button 
                            key={option+i} 
                            onClick={e=>handleSelectOption(e,option)}
                            style={{top: display ? i*40 : (-options.length+i)*40, backgroundColor: isOptionSelected(option) ? selectedColor : '#ebebeb'}}
                            className={isOptionSelected(option) ? styles.selected : ''}
                        >
                            {option}
                        </button>
                    ))
                }
                </div>
            </div>
        </div>
    ) : (
        <div className={`${styles['input-container']} ${!animated ? styles['normal'] : styles['animated']} ${className}`} style={style}>  
            <input
                type={type} 
                placeholder=' ' 
                value={value} 
                onChange={e=>setValue(e.target.value)} 
                onFocus={handleFocus} 
                onBlur={handleBlur}
                style={inputStyles} 
            />
            <label style={labelStyles}>{label}</label>
        </div>
    )
}

export default Input;