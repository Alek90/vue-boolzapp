const root = new Vue({

    el: "#root",

    data:{

        selector: 0,

        autoResponse: {
            date: '',
            text: 'Ok Ok',
            status: 'received'
        },

        newMessage: {
            date: '',
            text: '',
            status: 'sent'
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

        changeSelector (index){
            console.log("ciao");
            if(this.selector != index){
                this.selector = index
                console.log(this.selector);
            }
        },

        insertNewMessage(){
            console.log(this.newMessage);
            this.contacts[this.selector].messages.push(this.newMessage);
            console.log(this.contacts[this.selector].messages);

            setTimeout (() =>{
                console.log("ok ok");
                this.contacts[this.selector].messages.push(this.autoResponse)
            }, 1000);

            /*  questo messaggio deve essere inserito all'interno di un .message .sent_message; V
                per fare ciò deve entrare in messages del relativo contact; V
                gli deve essere applicata la proprietà status: 'sent'; V
                gli deve essere applicata la data;
                gli deve seguire al tempo di 1 secondo un .message . received_message;
            */
        },
    }
})

