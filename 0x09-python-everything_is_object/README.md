# Python - Everything is an Object

![Project Image](https://s3.amazonaws.com/intranet-projects-files/holbertonschool-higher-level_programming+/252/r_208403_QPSN8.jpg)

This project explores the concept of object instantiation in Python, delving into variable aliasing, object identifiers, types, and mutability. The project includes a series of quiz-like questions, each answered in single-line `.txt` files.

![GIF](https://media.giphy.com/media/wAjfQ9MLUfFjq/giphy.gif)

## Tests :heavy_check_mark:

* [tests](./tests): Folder containing test files.

## Tasks :page_with_curl:

* **0. Who am I?**
  * [0-answer.txt](./0-answer.txt): Which function would you use to print the type of an object?

* **1. Where are you?**
  * [1-answer.txt](./1-answer.txt): How do you get a variable's identifier (memory address in CPython implementation)?

* **2. Right count**
  * [2-answer.txt](./2-answer.txt): In the following code, do `a` and `b` point to the same object?
    ```
    >>> a = 89
    >>> b = 100
    ```

* **3. Right count =**
  * [3-answer.txt](./3-answer.txt): In the following code, do `a` and `b` point to the same object?
    ```
    >>> a = 89
    >>> b = 89
    ```

* **4. Right count =**
  * [4-answer.txt](./4-answer.txt): In the following code, do `a` and `b` point to the same object?
    ```
    >>> a = 89
    >>> b = a
    ```

* **5. Right count =+**
  * [5-answer.txt](./5-answer.txt): In the following code, do `a` and `b` point to the same object?
    ```
    >>> a = 89
    >>> b = a + 1
    ```

* **6. Is equal**
  * [6-answer.txt](./6-answer.txt): What do these 3 lines print?
    ```
    >>> s1 = "Best School"
    >>> s2 = s1
    >>> print(s1 == s2)
    ```

* **7. Is the same**
  * [7-answer.txt](./7-answer.txt): What do these 3 lines print?
    ```
    >>> s1 = "Best"
    >>> s2 = s1
    >>> print(s1 is s2)
    ```

* **8. Is really equal**
  * [8-answer.txt](./1-answer.txt): What do these 3 lines print?
    ```
    >>> s1 = "Best School"
    >>> s2 = "Best School"
    >>> print(s1 == s2)
    ```

* **9. Is really the same**
  * [9-answer.txt](./9-answer.txt): What do these 3 lines print?
    ```
    >>> s1 = "Best School"
    >>> s2 = "Best School"
    >>> print(s1 is s2)
    ```

* **10. And with a list, is it equal**
  * [10-answer.txt](./10-answer.txt): What do these 3 lines print?
    ```
    >>> l1 = [1, 2, 3]
    >>> l2 = [1, 2, 3]
    >>> print(l1 == l2)
    ```

* **11. And with a list, is it the same**
  * [11-answer.txt](./11-answer.txt): What do these 3 lines print?
    ```
    >>> l1 = [1, 2, 3]
    >>> l2 = [1, 2, 3]
    >>> print(l1 is l2)
    ```

* **12. And with a list, is it really equal**
  * [12-answer.txt](./12-answer.txt): What do these 3 lines print?
    ```
    >>> l1 = [1, 2, 3]
    >>> l2 = l1
    >>> print(l1 == l2)
    ```

* **13. And with a list, is it really the same**
  * [13-answer.txt](./13-answer.txt): What do these 3 lines print?
    ```
    >>> l1 = [1, 2, 3]
    >>> l2 = l1
    >>> print(l1 is l2)
    ```

* **14. List append**
  * [14-answer.txt](./14-answer.txt): What does this script print?
    ```python
    l1 = [1, 2, 3]
    l2 = l1
    l1.append(4)
    print(l2)
    ```

* **15. List add**
  * [15-answer.txt](./15-answer.txt): What does this script print?
    ```python
    l1 = [1, 2, 3]
    l2 = l1
    l1 = l1 + [4]
    print(l2)
    ```

* **16. Integer incrementation**
  * [16-answer.txt](./16-answer.txt): What does this script print?
    ```python
    def increment(n):
        n += 1

    a = 1
    increment(a)
    print(a)
    ```

* **17. List incrementation**
  * [17-answer.txt](./17-answer.txt): What does this script print?
    ```python
    def increment(n):
        n.append(4)

    l = [1, 2, 3]
    increment(l)
    print(l)
    ```

* **18. List assignation**
  * [18-answer.txt](./18-answer.txt): What does this script print?
    ```python
    def assign_value(n, v):
        n = v

    l1 = [1, 2, 3]
    l2 = [4, 5, 6]
    assign_value(l1, l2)
    print(l1)
    ```

* **19. Copy a list object**
  * [19-copy_list.py](./19-copy_list.py): Python function `def copy_list(l):` that returns a copy of a list.

* **20. Tuple or not?**
  * [20-answer.txt](./20-answer.txt): Is `a` a tuple?
    ```
    a = ()
    ```

* **21. Tuple or not?**
  * [21-answer.txt](./21-answer.txt): Is `a` a tuple?
    ```
    a = (1, 2)
    ```

* **22. Tuple or not?**
  * [22-answer.txt](./22-answer.txt): Is `a` a tuple?
    ```
    a = (1)
    ```

* **23. Tuple or not?**
  * [23-answer.txt](./23-answer.txt): Is `a` a tuple?
    ```
    a = (1, )
    ```
