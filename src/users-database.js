import aisling from "./assets/images/pic-aisling.jpg";
import alannah from "./assets/images/pic-alannah.jpg";
import audrey from "./assets/images/pic-audrey.png";
import beatrice from "./assets/images/pic-beatrice.jpg";
import daniel from "./assets/images/pic-daniel.jpg";
import michael from "./assets/images/pic-michael.jpg";
import sajida from "./assets/images/pic-sajida.jpg";

const users = [
    {
        "id" : "1",
        "name": "Adam Zhao Heather",
        "email": "Adam@example.com",
        "profile_pic": "",
        "lunch_time": "1230",
        "office_status": {
            "Monday": true,
            "Tuesday": false,
            "Wednesday": true,
            "Thursday": true,
            "Friday": false
        },
        "tags": {
            "chat-tag": true,
            "coffee-tag": false,
            "snack-tag": false,
            "game-tag": false,
            "working-tag": false,
            "busy-tag": false
        }
    },
    {
        "id" : "2",
        "name": "Aisling Cooke",
        "email": "Aisling.Cooke@dell.com",
        "profile_pic": aisling,
        "lunch_time": "1300",
        "office_status": {
            "Monday": true,
            "Tuesday": true,
            "Wednesday": true,
            "Thursday": false,
            "Friday": false
        },
        "tags": {
            "chat-tag": false,
            "coffee-tag": true,
            "snack-tag": false,
            "game-tag": false,
            "working-tag": false,
            "busy-tag": false
        }
    },

    {
        "id" : "3",
        "name": "Alannah Bennet",
        "email": "Alannah.Bennet@dell.com",
        "profile_pic": alannah,
        "lunch_time": "1230",
        "office_status": {
            "Monday": false,
            "Tuesday": true,
            "Wednesday": true,
            "Thursday": true,
            "Friday": false
        },
        "tags": {
            "chat-tag": false,
            "coffee-tag": false,
            "snack-tag": false,
            "game-tag": false,
            "working-tag": false,
            "busy-tag": true
        }
    },

    {
        "id" : "4",
        "name": "Audrey del Rosario",
        "email": "Audrey.delRosario@dell.com",
        "profile_pic": audrey,
        "lunch_time": "1300",
        "office_status": {
            "Monday": false,
            "Tuesday": true,
            "Wednesday": true,
            "Thursday": true,
            "Friday": false
        },
        "tags": {
            "chat-tag": false,
            "coffee-tag": false,
            "snack-tag": true,
            "game-tag": false,
            "working-tag": false,
            "busy-tag": false
        }
    },

    {
        "id" : "5",
        "name": "Beatrice Saviozzi",
        "email": "Beatrice.Saviozzi@dell.com",
        "profile_pic": beatrice,
        "lunch_time": "1330",
        "office_status": {
            "Monday": false,
            "Tuesday": false,
            "Wednesday": false,
            "Thursday": false,
            "Friday": false
        },
        "tags": {
            "chat-tag": false,
            "coffee-tag": false,
            "snack-tag": false,
            "game-tag": false,
            "working-tag": false,
            "busy-tag": false
        }
    },

    {
        "id" : "6",
        "name": "Daniel Williams",
        "email": "Daniel.Williams@dell.com",
        "profile_pic": daniel,
        "lunch_time": "1300",
        "office_status": {
            "Monday": true,
            "Tuesday": true,
            "Wednesday": false,
            "Thursday": false,
            "Friday": true
        },
        "tags": {
            "chat-tag": false,
            "coffee-tag": false,
            "snack-tag": false,
            "game-tag": false,
            "working-tag": true,
            "busy-tag": false
        }
    },

    {
        "id" : "7",
        "name": "Sajida Niazi",
        "email": "Sajida.Niazi@dell.com",
        "profile_pic": sajida,
        "lunch_time": "1230",
        "office_status": {
            "Monday": true,
            "Tuesday": true,
            "Wednesday": true,
            "Thursday": false,
            "Friday": false
        },
        "tags": {
            "chat-tag": false,
            "coffee-tag": false,
            "snack-tag": false,
            "game-tag": false,
            "working-tag": false,
            "busy-tag": true
        }
    },
    {
        "id" : "8",
        "name": "Bob",
        "email": "bob@dell.com",
        "profile_pic": "",
        "lunch_time": "1100",
        "office_status": {
            "Monday": false,
            "Tuesday": false,
            "Wednesday": true,
            "Thursday": true,
            "Friday": true
        },
        "tags": {
            "chat-tag": false,
            "coffee-tag": false,
            "snack-tag": false,
            "game-tag": false,
            "working-tag": true,
            "busy-tag": false
        }
    },
    {
        "id" : "9",
        "name": "Michael Dell",
        "email": "Michael.Dell@dell.com",
        "profile_pic": michael,
        "lunch_time": "1230",
        "office_status": {
            "Monday": true,
            "Tuesday": true,
            "Wednesday": true,
            "Thursday": true,
            "Friday": true
        },
        "tags": {
            "chat-tag": false,
            "coffee-tag": false,
            "snack-tag": false,
            "game-tag": false,
            "working-tag": true,
            "busy-tag": false
        }
    },
    {
        "id" : "10",
        "name": "Jhon Doe",
        "email": "Jhon.Doe@dell.com",
        "profile_pic": "",
        "lunch_time": "1330",
        "office_status": {
            "Monday": true,
            "Tuesday": false,
            "Wednesday": true,
            "Thursday": false,
            "Friday": true
        },
        "tags": {
            "chat-tag": false,
            "coffee-tag": false,
            "snack-tag": false,
            "game-tag": true,
            "working-tag": false,
            "busy-tag": false
        }
    }
  ];
  
  export default users;