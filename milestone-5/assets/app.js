const root = new Vue({

    el: "#root",

    data:{

        selector: 0,

        autoResponse: {
            date: '',
            text: 'Ok Ok',
            status: 'received'
        },

        messageText: '',

        searching: '',

        menuMessage: {
            index: 0,
            open: false
        },

        user: [
            
            {
                name: 'EleZe',
                avatar: '_io',
                visible: true,
            
            }
            
        ],

        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],

    },

    methods:{

        // cambia il valore del selettore;
        changeSelector (index){
            console.log("ciao");
            if(this.selector != index){
                this.selector = index
            };
        },

        insertNewMessage(){

            // il testo inviato viene salvato nella proprietà di un nuovo oggetto all'interno dei messages del contatto in chat;
            this.contacts[this.selector].messages.push({ 
                date: 'dates',
                text: this.messageText,
                status: 'sent'
            });
            this.messageText = '';
            console.log(dayjs());

            // generare una risposta dopo un secondo dall'invio del messaggio;
            setTimeout (() =>{
                this.contacts[this.selector].messages.push(this.autoResponse);
            }, 1000);

        },

        // aprire e chiudere un menu relativo al messaggio;
        menuMessageVisible(index){
            console.log("menu");
            this.menuMessage.index = index;
            if(this.menuMessage.open === false){
                this.menuMessage.open = true
            }else {
                this.menuMessage.open = false
            };

        },

        // cancellare il messaggio
        deleteMessage(index){
            this.contacts[this.selector].messages.splice(index, 1);
        }

    },
})



