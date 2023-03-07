enum Term {
  ONE_YEAR = '1yr',
  THREE_YEAR = '3yr',
}

const DURATION_3YRS = 94608000;
const DURATION_1YRS = 31536000;

function termToDurationHours(term: Term) {
  console.log(termToDuration(term) / 60);
}

function termToDuration(term: Term): number {
  switch (term) {
    case Term.ONE_YEAR:
      return DURATION_1YRS;
    case Term.THREE_YEAR:
      return DURATION_3YRS;
  }
}

termToDurationHours(Term.ONE_YEAR);
