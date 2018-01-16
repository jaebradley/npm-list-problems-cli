/* eslint-disable no-console */

import { getProblems, errorTypes } from 'npm-list-problems';

import DependencyError from './DependencyError';

const getErrorTypes = (types) => {
  if (types && types.length > 0) {
    return types;
  }

  return [
    errorTypes.extraneousDependency,
    errorTypes.missingDependency,
    errorTypes.missingPeerDependency,
    errorTypes.unmetPeerDependency,
    errorTypes.invalidDependency,
    errorTypes.dependencyError,
  ];
};

const findProblems = ({ path, types }) => {
  const matchingErrorTypes = getErrorTypes(types);
  return getProblems(path)
    .then(problems => (problems.filter(problem => matchingErrorTypes.includes(problem.type))))
    .then((matchingProblems) => {
      if (matchingProblems && matchingProblems.length > 0) {
        const data = {
          message: 'Matching dependency errors',
          path,
          problems: matchingProblems,
          types,
        };
        console.error(`Matching Problem Information:\n${JSON.stringify(data, null, 2)}`);
        throw new DependencyError(data);
      }

      console.log(`No matching dependency errors found for types: ${matchingErrorTypes} and path: ${path}`);
    }).catch((e) => {
      console.error(`Error: ${e}`);
      throw e;
    });
};

export { getErrorTypes, findProblems };
