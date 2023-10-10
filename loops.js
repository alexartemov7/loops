//say hello 3 times
for(let i=0; i < 3; i++) {
    console.log('hello')
}

/* 
0
1
2
3
*/
for(let i=0; i < 4; i++) {
    console.log(i)
}

const people = ['Todd', 'Andrew', 'Derek', 'Brad', 'Michael', 'Tre']
//make a loop that says hello to each person in the array
for (let i=0; i<people.length; i++){
    console.log('Hello, ' + people[i] + '!')
}