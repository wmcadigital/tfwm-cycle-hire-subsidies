import {
  validateDateOfBirth,
  addressIdPresent,
  validateContactPreference,
} from "./validation";

describe("validation", () => {
  describe("validateDateOfBirth", () => {
    it("returns 'Required' if no part of the date is populated", () => {
      expect(validateDateOfBirth({})).toEqual({ dateOfBirth: "Required" });
    });

    it("returns 'Invalid' if only part of the date is populated", () => {
      expect(validateDateOfBirth({ bdayDay: "1", bdayMonth: "2" })).toEqual({
        dateOfBirth: "Invalid",
      });
    });

    it("returns 'Invalid' if all of the date is populated but is invalid", () => {
      expect(
        validateDateOfBirth({ bdayDay: "30", bdayMonth: "2", bdayYear: "2022" })
      ).toEqual({
        dateOfBirth: "Invalid",
      });
    });

    it("returns empty error object if date is valid", () => {
      expect(
        validateDateOfBirth({ bdayDay: "1", bdayMonth: "2", bdayYear: "2022" })
      ).toEqual({});
    });
  });
  describe("addressIdPresent", () => {
    it("indicates required in errors if not there", () => {
      expect(addressIdPresent("test")()).toEqual({
        test: {
          addressId: "Required",
        },
      });
    });

    it("returns an empty error object for prefix if present", () => {
      expect(
        addressIdPresent("test")({ test: { addressId: "12345" } })
      ).toEqual({
        test: {},
      });
    });
  });

  describe("validateContactPreference", () => {
    it("returns an error if no contact preference is selected", () => {
      expect(validateContactPreference()).toEqual({
        selectContactPref: "Select at least 1 topic",
      });
    });

    it("return an error if all contact preferences are false", () => {
      const contactPrefs = {
        contactPreference: {
          telephone: false,
          email: false,
        },
      };

      expect(validateContactPreference(contactPrefs)).toEqual({
        selectContactPref: "Select at least 1 topic",
      });
    });

    it("doesn't return an error if at least one contact preference is selected", () => {
      const contactPrefs = {
        contactPreference: {
          telephone: false,
          email: true,
        },
      };

      expect(validateContactPreference(contactPrefs)).toEqual({});
    });
  });
});
