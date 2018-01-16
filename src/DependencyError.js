class DependencyError extends Error {
  constructor({
    message, path, types, problems,
  }) {
    super(message);

    this.name = 'DependencyError';
    this.message = message;
    this.path = path;
    this.types = types;
    this.problems = problems;
  }
}

export default DependencyError;
