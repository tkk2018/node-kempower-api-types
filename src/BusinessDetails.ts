export interface BusinessDetails {
  /**
   * Name of the operator. Max 100 characters.
   * @requires
   */
  name: string;

  /**
   * Link to the operator's website.
   */
  website: string | null;
};
