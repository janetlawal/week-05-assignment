import { mockposts } from "./mockData";
import { toTitlecase, getUserNameByID } from "./app.js";
import { assert, describe, expect, test } from "vitest";

describe("JSON Placeholder posts", () => {
    test("should return a positive result that it is an array", () => {
        assert.isArray(mockposts, "mockposts in should be an array");
    });
    const bodyobject = {
        userId: expect.any(Number),
        id: expect.any(Number),
        title: expect.any(String),
        body: expect.any(String),
    };
    
    test("Each item in the array should be an object.", () => {
        expect(mockposts).toContainEqual(bodyobject);
    });

     // Write a test which checks that "Each item in the array should be an object, but with a for loop":
  test("Each item in the Array should be an object, through a for loop.", () => {
    // Your code here!
    const items = [{id: 1 }, { id: 2 }, { id: 3 }];
    for (let i = 0; i < items.length; i++) {
        expect(typeof items[i]).toBe("object");
        expect(items[i]).not.toBeNull();
    }
  });

  // Test the function toTitleCase:
  // This is one for you to finish and fix:
  test("any string put through the toTitleCase function should return a Titled Case String.", () => {
    // in here, is where you would write your code!
    const Input = "Frankie";
    const result = toTitleCase(Input); // this function needs a parameter
    const expected = "Frankie";

    expect(result).toBe(expected); // you need to finish off this test, because your project lead actually doesn't know as much as they let on....
  });

  // Next, make a 'toTitleCase' test work with a single title, from a post, from the mockData
  test("a post title, put through the toTitleCase function, should return a Titled Case String.", () => {
    // in here, is where you would write your code!
    const Input = "A simple post title for testing";
    const result = toTitleCase(Input); // this function needs a parameter
    const expected = "A simple post title for testing"; // this string needs changing to a Title Case'd string, from a post title

    expect(result).toBe(expected); // you need to finish off this test too.
  });

  // The following tests are going to fail. Part of your assignment is to figure out why (it's partly because your project lead gets paid way too much, and spends their time at the pub, and not coding correctly....):
  test("individual item should not be an array", () => {
    const mockPosts = { id: 1, title: "mockData" };
      
    expect(mockPosts).not.toBeInstanceOf(Array
    );
  });
  // Perhaps some of these tests should be in a different suite??
  test("checks that each userID, in each item, should be a number", () => {
    const mockPosts = [
        { id: 1, title: "post One", userID: 1 },
        { id: 2, title: "post Two", userID: 2 },
        { id: 3, title: "post Three", userID: 3 }
      ];

    mockPosts.forEach((post) => {
      expect(post.userID).toStrictEqual(expect.any(Number));
    });
  });

  test("returns the correct username matched from the userID in an array", () => {
    const result = getUserNameByID(2);
    const expected = "Bertie";

    expect(result).toBe(expected);
  });

  test("return the correct username matched from the userID in an array", () => {
    const result = getUserNameByID(4);
    const expected = "Jez";

    expect(result).toBe(expected);
  });
});
