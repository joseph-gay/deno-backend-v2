import { Id } from "@infra/storage/mod.ts";
import { User } from "./typings.d.ts";

/**
 * Represents a User entity in the system.
 * @implements {User} - Indicates that the UserEntity class implements the User interface.
 */
export class UserEntity implements User {
  public readonly id: Id;
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public isActive: boolean;
  public createdAt: Date;
  public updatedAt?: Date;

  /**
   * Constructs a User instance with the given properties.
   * @param {User} user - An object containing the properties for the User entity.
   */
  constructor(user: User) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.password = user.password;
    this.isActive = user.isActive;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }

  /**
   * Returns the full name of the user.
   * @returns {string} The full name of the user.
   */
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  /**
   * Returns the initials of the user's first and last name.
   * @returns {string} The initials of the user's first and last name.
   */
  get initials(): string {
    return `${this.firstName[0]}${this.lastName[0]}`;
  }
}
