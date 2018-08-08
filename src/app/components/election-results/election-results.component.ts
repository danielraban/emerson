import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-election-results',
  templateUrl: './election-results.component.html',
  styleUrls: ['./election-results.component.css']
})
export class ElectionResultsComponent implements OnInit {
  votes = ['Alex', 'Michael', 'Harry', 'Dave', 'Michael', 'Victor', 'Harry', 'Alex', 'Mary', 'Mary'];
  electionResult: string;
  constructor() { }

  ngOnInit() {
    this.electionWinner(this.votes);
  }
  electionWinner(votes) {
    const sortVotes = votes.sort();
    const mapVotes = {};
    
    sortVotes.map(function(name){    
      if (!mapVotes[name]){
        mapVotes[name] = 1 ;
      } else {
        mapVotes[name] += 1;
      }        
    })  
    
    const result = Object.keys(mapVotes).reduce(function(a,b){
      return mapVotes[a] > mapVotes[b] ? a : b;
    })
    console.log(result);
    this.electionResult = result;
  }
}
