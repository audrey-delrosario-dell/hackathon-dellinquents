const users = [
    {
        "name": "Alice",
        "email": "alice@example.com",
        "profile_pic": "[1](https://example.com/alice.jpg)",
        "lunch_time": "12:30 PM",
        "office_status": {
            "Monday": True,
            "Tuesday": True,
            "Wednesday": False,
            "Thursday": True,
            "Friday": False
        },
        "tags": {
            "chat-tag": True,
            "coffee-tag": False,
            "snack-tag": True,
            "game-tag": False,
            "working-tag": True,
            "sweettreat-tag": True,
            "busy-tag": False
        }
    },
    {
        "name": "Bob",
        "email": "bob@example.com",
        "profile_pic": "[2](https://example.com/bob.jpg)",
        "lunch_time": "1:00 PM",
        "office_status": {
            "Monday": True,
            "Tuesday": False,
            "Wednesday": True,
            "Thursday": False,
            "Friday": True
        },
        "tags": {
            "chat-tag": False,
            "coffee-tag": True,
            "snack-tag": False,
            "game-tag": True,
            "working-tag": False,
            "sweettreat-tag": False,
            "busy-tag": True
        }
    }
  ];
  
  export default users;