import React from 'react'
import { useState, useContext } from 'react'
import './Chat.css'
import { NameContext } from '../context/NameContext'


const Chat = () => {

    const [mensagem, setMensagem] = useState([])

    const [addMensagem, setAddMensagem] = useState([])

    function addMsg() {
        setAddMensagem([...addMensagem, mensagem])
    }
    
    const [name] = useContext(NameContext);

  return (
    
        <div id="chat_screen">
            <header>
                <h2><strong>Atendimento On-line</strong></h2>
            </header>
            <div class="message_list">
                <div class="message_item">
                    <div class="message_user_01"><strong>João diz:</strong></div>
                    <div class="message_chat_01">Boa tarde Sr. Fulano, tudo bem?</div>
                </div>
                <div class="message_item">
                    <div class="message_user_01"><strong>João diz:</strong></div>
                    <div class="message_chat_01">Estamos com um empréstimo pessoal disponível para seu CPF, gostaria de saber mais?</div>
                </div>
                <div class="message_item">
                    <div class="message_user_02"><strong>Gabriel diz:</strong></div>
                    <div class="message_chat_02">Boa tarde, no momento não estou precisando!</div>
                </div>
                <div class="message_item">
                    <div class="message_user_01"><strong>João diz:</strong></div>
                    <div class="message_chat_01">Há um valor de R$10.000,00 disponíveis, não iria lhe ajudar?</div>
                </div>
                <div class="message_item">
                    <div class="message_user_02"><strong>Gabriel diz:</strong></div>
                    <div class="message_chat_02">No momento não, agradeço o contato!</div>
                </div>
                <div class="message_item">
                    <div class="message_user_01"><strong>João diz:</strong></div>
                    <div class="message_chat_01">Certo então Sr. Gabriel, desejando é só entar no app YourBank e verificar as condições!</div>
                </div>
                <div class="message_item">
                    <div class="message_user_01"><strong>João diz:</strong></div>
                    <div class="message_chat_01">Agradeço a atenção e uma ótima semana!</div>
                </div>
                <div class="message_item">
                    <div class="message_user_02"><strong>Gabriel diz:</strong></div>
                    <div class="message_chat_02">Valeu fml, boa pa nois!</div>
                </div>
                <div>
                    
                    {addMensagem.map((msg) => (
                    <div>
                        <div className="message_user_02 font-bold">{name} diz:</div>
                        <div className="message_chat_02">{msg}</div>
                    </div>
                    
                ))}
            </div>
            </div>
            <fieldset id="form_chat_send" >
                <input id="input-msg" type="text" name="message" value={mensagem} onChange={(event) =>{setMensagem(event.target.value)}}></input>
                <button type="button"  onClick={() => addMsg()}>ENVIAR</button>
            </fieldset>
        </div>
    
  )
}

export default Chat