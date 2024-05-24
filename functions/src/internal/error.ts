/**
 * HTTP error codes as classes. This serves as the base class.
 */
export class ApplicationError extends Error {
  constructor(
    readonly code: number,
    readonly message: string,
    readonly data?: any
  ) {
    super(message);
  }
}
