<h1>README</h1>

<h1>Description</h1>
This code is designed to process a logical formula (`F`). It checks the validity of the formula, divides it into clauses, removes literals and their negations, and finally determines if the resulting set of clauses is empty or not.

<h1>Usage</h1>
To use the code, you need to provide a logical formula (`F`) as a string. The logical formula should adhere to the following rules:
- It can contain uppercase letters (P, Q, R, S, T) representing propositions.
- It can contain logical operators:
  - `v` for disjunction (OR).
  - `!` for negation (NOT).
  - `,` as a separator for different clauses.
  - `(` and `)` for grouping.

<h1>Functions</h1>
1. **`processFormule(F)`**:
   - This is the main function that processes the logical formula.
   - It checks the validity of the formula, splits it into clauses, removes literals and their negations, and finally, determines if the resulting set of clauses is empty or not.

2. **`supprimerLitteraux(liste)`**:
   - This function removes literals and their negations from the list of clauses.
   - It iterates through each clause, identifying literals and their negations, and removes them accordingly.

3. **`formuleEstValide(formule)`**:
   - This function validates the logical formula using a regular expression.
   - It ensures that the formula only contains valid characters (uppercase letters representing propositions, logical operators, and parentheses).

<h1>Example</h1>
An example of how to use the code is provided at the bottom. You can set your logical formula (`F`) and call the `processFormule(F)` function to see the result.

<h1>Note</h1>
- The code assumes that the input formula is properly formatted and follows the rules of propositional logic.
- The code does not perform logical evaluation; it simply processes the formula and checks its structure.
