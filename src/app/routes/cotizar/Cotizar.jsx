import { useState } from 'react';
import './Cotizar.scss';
import Input from '../../../components/Input/Input.tsx'
import Button from '../../../components/Button/Button'
import data from '../../../assets/data.json'

function Cotizar() {

  const [name, setName] = useState('');
  const [contact, setContact] = useState('WhatsApp');
  const [phone, setPhone] = useState('');
  const [template, setTemplate] = useState('');
  const [company, setCompany] = useState('');
  const [limitDate, setLimitDate] = useState('');
  const [device, setDevice] = useState('');
  const [productType, setProductType] = useState('');
  const [comment, setComment] = useState('');
  
  const [loading, setLoading] = useState(false);

  const inputProps = {
    type: 'text',
    animated: false,
    backgroundColor: '#fff',
    borderColor: '#fff',
    contentColor: '#000',
    labelColor: '#000',
    className: 'input',
    focusColor: '#6537C7',
    selectedColor: '#6537C7'
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(()=>setLoading(false),3000)

    try{
      //TODO:  

      const content = `Nombre: ${name} \n${contact === 'Teléfono' ? 'Teléfono:' : 'Mail:'} ${phone}\nPlantilla: ${template}\nEmpresa: ${company}\nFecha limite: ${limitDate}\nDispositivo/s: ${device}\nTipo de producto: ${productType}\nMensaje: ${comment}`;

      const res = await fetch('https://email-sender-blue.vercel.app/api/v1/send', {
        method: 'POST',
        body: JSON.stringify({
          from: 'bconesta@gmail.com',
          to: 'bconesta@gmail.com',
          subject: 'MILOlab cotización',
          content,
          HTMLcontent: content.replaceAll("\n", "<br>")
        }),
      });
      const data = await res.json();
    }
    catch{

    }

  }

  return (
    <div className='quote-page'>
        <section className='head'>
            <h1>Cotización online</h1>
            <p>
                Para realizar tu cotización personalizada, completa el siguiente formulario explicando claramente la idea o proyecto. Luego, nos contactaremos con usted via mail o WhatsApp para continuar con el proceso y poder enviarle una cotización del trabajo.
            </p>
        </section>
        <section className='form-container'>
            <form action=''>
              <div className='inputs-container'>
                <Input
                  {...inputProps}
                  label='Nombre y apellido *' 
                  value={name} 
                  setValue={setName} 
                />
                <Input
                  {...inputProps}
                  options={['WhatsApp', 'Mail']}
                  label='Método de contacto'
                  type='toggle' 
                  value={contact} 
                  setValue={setContact} 
                />
                <Input
                  {...inputProps}
                  label={contact === 'WhatsApp' ? 'WhatsApp *' : 'Mail *'}
                  type={contact === 'WhatsApp' ? 'phone' : 'email'}
                  value={phone} 
                  setValue={setPhone} 
                />
              </div>
              <div className='inputs-container'>
                <Input
                  {...inputProps}
                  label='¿Va a usar alguna plantilla? *' 
                  type='select'
                  value={template} 
                  setValue={setTemplate}
                  options={data.map(app => app.title)}
                />
                <Input
                  {...inputProps}
                  label='Empresa (Opcional)' 
                  value={company} 
                  setValue={setCompany} 
                />
                <Input
                  {...inputProps}
                  label='Fecha límite del proyecto (Opcional)'
                  type='date' 
                  value={limitDate} 
                  setValue={setLimitDate} 
                />
              </div>
              <div className='inputs-container'>
                <Input
                  {...inputProps}
                  label='Dispositivo *'
                  type='select'
                  value={device} 
                  setValue={setDevice}
                  options={['Celular', 'Computadora', 'Tablet', 'TV touch']}
                />
                <Input
                  {...inputProps}
                  label='Tipo de producto *' 
                  type='select'
                  value={productType} 
                  setValue={setProductType} 
                />
              </div>
              <div className='inputs-container'>
                <Input
                  {...inputProps}
                  label='Contanos tu idea/proyecto (Opcional)'
                  type='textarea'
                  value={comment} 
                  setValue={setComment} 
                />
              </div>
              <Button type='submit' color='#6537C7' loading={loading} onClick={handleSubmit}>
                ENVIAR
              </Button>
            </form>
        </section>
    </div>
  )
}

export default Cotizar