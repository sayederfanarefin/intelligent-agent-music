function levenshteinDistance(a, b) {
  // Compute the Edit distance between two strings
  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

// Find the closest matching term from an array of terms
function findClosestMatch(input, terms, maxDistance = 20) {
  let minDistance = Infinity;
  let closestTerm = null;

  for (const term of terms) {
    const distance = levenshteinDistance(input, term);
    if (distance < minDistance && distance <= maxDistance) {
      minDistance = distance;
      closestTerm = term;
    }
  }

  return closestTerm;
}

function convertInformalQuery(informalQuery, terms) {
  // Remove question marks from the informal query
  informalQuery = informalQuery.replace(/\?/g, "");

  const words = informalQuery.split(" ");

  for (let i = 0; i < words.length; i++) {
    const correctedWord = findClosestMatch(words[i], terms);
    if (correctedWord) {
      words[i] = correctedWord;
    }
  }

  // const formalQuery = words.join(" ").trim();

  // Identify the term and input_name
  const termIndex = words.findIndex((word) => terms.includes(word));
  const term = words[termIndex];
  const input_name = words[termIndex + 2];

  // Create the final formal query
  return `${term}(X,${input_name})`;
}

function convertInformalQueryAnswerSets(informalQuery, terms) {
  // Remove question marks from the informal query
  informalQuery = informalQuery.replace(/\?/g, "");
  const t = findClosestMatch(
    informalQuery,
    terms.map((x) => x.label)
  );

  return terms.filter((x) => x.label === t)[0]?.key;
}

export { convertInformalQuery, convertInformalQueryAnswerSets };
