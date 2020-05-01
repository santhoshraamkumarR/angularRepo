import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGame } from '../game';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.css']
})
export class PlayerScoreComponent implements OnInit {
   public games = [];

  private url:string = "/assets/data/GameDetailsDetails.json";

 


  //constructor(private http: HttpClient) { }

  ngOnInit() {
    
  //  this.getGames().subscribe(data => this.games =data);
  }

// getGames():Observable<IGame[]>{
//   return this.http.get<IGame[ ]>(this.url);
// }

ConvertToInt(val){
    return parseInt(val);
  }
  public gamess = [
    {
        "gamename": "Game 2",
        "gamedesc": "Game 2 description",
        "startdate": {
            "$date": {
                "$numberLong": "1579113000000"
            }
        },
        "enddate": {
            "$date": {
                "$numberLong": "1590345000000"
            }
        },
        "gameStatus": "created",
        "mappedActions": [{
            "_id": {
                "$oid": "5e985d651eb6ed120fc3d39e"
            },
            "actionName": "2334",
            "description": "23423",
            "metricMultiplier": "10",
            "metrics": {
                "_id": {
                    "$oid": "5e84b1c148fc051e00b3d7c1"
                },
                "metricName": "User stories completion",
                "description": "User story completed and marked done",
                "metricType": "Point",
                "metricValue": "+10",
                "integrationElement": [{
                    "elementName": "jira",
                    "metricIntegrationActivities": [{
                        "activityDetails": "Maximum stories completed in a sprint"
                    }]
                }],
                "submittedForms": ["firstForm"]
            }
        }, {
            "_id": {
                "$oid": "5e985d761eb6ed120fc3d39f"
            },
            "actionName": "2",
            "description": "story completion",
            "metricMultiplier": "10",
            "metrics": {
                "_id": {
                    "$oid": "5e84b21248fc051e00b3d7c2"
                },
                "metricName": "Individual stories completion",
                "description": "Individual story completed by player",
                "metricType": "Point",
                "metricValue": "+10",
                "integrationElement": [{
                    "elementName": "jira",
                    "metricIntegrationActivities": [{
                        "activityDetails": "Maximum stories completed in a sprint"
                    }]
                }],
                "submittedForms": ["firstForm"]
            }
        }, {
            "_id": {
                "$oid": "5e985d8d1eb6ed120fc3d3a0"
            },
            "actionName": "3",
            "description": "Team",
            "metricMultiplier": "10",
            "metrics": {
                "_id": {
                    "$oid": "5e84b24f48fc051e00b3d7c3"
                },
                "metricName": "Team performance",
                "description": "Team performance of completing the story",
                "metricType": "Point",
                "metricValue": "+10",
                "integrationElement": [{
                    "elementName": "jira",
                    "metricIntegrationActivities": [{
                        "activityDetails": "Maximum stories completed in a sprint"
                    }]
                }],
                "submittedForms": ["firstForm"]
            }
        }, {
            "_id": {
                "$oid": "5e985d761eb6ed120fc3d39f"
            },
            "actionName": "2",
            "description": "Scrum cermony attended on time",
            "metricMultiplier": "2",
            "metrics": {
                "_id": {
                    "$oid": "5e84b21248fc051e00b3d7c2"
                },
                "metricName": "Attended in Scrum Cermony",
                "description": "Attended in Scrum Cermony of the  player",
                "metricType": "Point",
                "metricValue": "+2",
                "integrationElement": [{
                    "elementName": "jira",
                    "metricIntegrationActivities": [{
                        "activityDetails": "Maximum stories completed in a sprint"
                    }]
                }],
                "submittedForms": ["firstForm"]
            }
        }, {
            "_id": {
                "$oid": "5e985d761eb6ed120fc3d39f"
            },
            "actionName": "2",
            "description": "Scrum cermony attended late",
            "metricMultiplier": "2",
            "metrics": {
                "_id": {
                    "$oid": "5e84b21248fc051e00b3d7c2"
                },
                "metricName": "Attendence in Scrum Cermony attended late",
                "description": "Attendended in Scrum Cermony of the  player",
                "metricType": "Point",
                "metricValue": "-2",
                "integrationElement": [{
                    "elementName": "jira",
                    "metricIntegrationActivities": [{
                        "activityDetails": "Maximum stories completed in a sprint"
                    }]
                }],
                "submittedForms": ["firstForm"]
            }
        }, {
            "_id": {
                "$oid": "5e985d761eb6ed120fc3d39f"
            },
            "actionName": "2",
            "description": "Inprogress tasks",
            "metricMultiplier": "5",
            "metrics": {
                "_id": {
                    "$oid": "5e84b21248fc051e00b3d7c2"
                },
                "metricName": "Inprogress tasks",
                "description": "Inprogress tasks",
                "metricType": "Point",
                "metricValue": "-5",
                "integrationElement": [{
                    "elementName": "jira",
                    "metricIntegrationActivities": [{
                        "activityDetails": "Maximum stories completed in a sprint"
                    }]
                }],
                "submittedForms": ["firstForm"]
            }
        }, {
            "_id": {
                "$oid": "5e985d761eb6ed120fc3d39f"
            },
            "actionName": "2",
            "description": "Absent for Scrum cermony",
            "metricMultiplier": "5",
            "metrics": {
                "_id": {
                    "$oid": "5e84b21248fc051e00b3d7c2"
                },
                "metricName": "Absent for Scrum cermony",
                "description": "Absent for Scrum cermony",
                "metricType": "Point",
                "metricValue": "-5",
                "integrationElement": [{
                    "elementName": "jira",
                    "metricIntegrationActivities": [{
                        "activityDetails": "Maximum stories completed in a sprint"
                    }]
                }],
                "submittedForms": ["firstForm"]
            }
        }],
        "mappedTeams": [{
            "_id": {
                "$oid": "5e4cb886a4966a1174cea378"
            },
            "teamname": "Team 1",
            "teamdesc": "Team 1",
            "mappedPlayers": [{
                "_id": {
                    "$oid": "5e45270fa4966a3bec916b3b"
                },
                "fullName": "Player 1",
                "employeId": "U77384",
                "playerRole": "test",
                "project": "TICL",
                "email": "player1@gmail.com",
                "totalScore": "73",
                "scrumCermonyScore":"3"},
                
             {
                "_id": {
                    "$oid": "5e4cb835a4966a1174cea376"
                },
                "fullName": "Player2",
                "employeId": "U77385",
                "playerRole": "Test Role",
                "project": "TICL",
                "email": "player2@gmail.com",
                "totalScore": {
                    "$numberInt": "40"
                },
                "scrumCermonyScore": {
                    "$numberInt": "0"
                }
            }]
        }],
        "leaderBoardDetails": [{
            "gameNameChoosen": "Test Game1",
            "leaderBoardName": "LeadeBoard 6",
            "description": "The term leaderboard is often used to signify rank among people who play various titles",
            "viewOption": "Player View,Player View",
            "actionsLinked": [{
                "_id": {
                    "$oid": "5e45263ca4966a3bec916b38"
                },
                "actionName": "Test Action"
            }],
            "favouriteleaderboard": [{
                "playerName": "player1",
                "favourite": "yes"
            }, {
                "playerName": "santhosh",
                "favourite": "No"
            }, {
                "playerName": "player2",
                "favourite": "yes"
            }]
        }],
        "submittedForms": ["firstForm", "secondForm", "secondForm", "thirdForm", "leaderBoardForm", "leaderBoardForm"],
        "_class": "com.gamification.entities.GameDetails"
    }
    
    ]

    }