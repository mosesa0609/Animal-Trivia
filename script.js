let score = 0
for (i = 0; i < score; i++) {
  score += 1
}
// function showScores() {
//   $('#score').append(score);
// }

const button = $('#btnSubmit')
button.on('click', questionAns)

const reset = $('#btnReset')
reset.on('click', function () {
  document.location.reload()
})

//Resets the form
// function resetForm () {
//   ('#triviaForm').reset()
//   return true
// }

// function firstQ () {
  function questionAns () {
    let answer = $('#Q1').val()
    if (answer === 'Back') {
      score += 1
      // event.preventDefault()
      console.log(score)
    } else if (answer === '') {
      alert('Please enter an answer.')
      return false
    }
// }
// function secondQ () {
    let answer2 = $('#Q2').val()
    if (answer2 === 'Chow Chow') {
      score += 1
      // event.preventDefault()
      console.log(score)
    } else if (answer === '') {
      alert('Please enter an answer.')
      return false
    }
    if (score >= 2) {
      alert('You have ' + score + 'pts!')
    } else if (score <= 4) {
      alert('You have ' + score + 'pts..Good Luck next time...')
    }
    let tally = $('#score')
    tally.replaceWith(score)
    // let tally = $('#score')
    // tally.append(score)
  }
//Tallies up the score and delivers the correct condition.


//Prevents enter key from submitting the form.
const input = $('input')
input.keypress(function (event) {
  if (event.which == 13) {
    event.preventDefault()
  }
})

