# Python - Inheritance Refactored

This project is an exploration of Python class inheritance concepts. Throughout its development, I delved into the nuances of super- and sub-classes, practiced defining classes with multiple base classes, and honed my skills in overriding inherited methods and attributes.

## Test Files :heavy_check_mark:

* [tests](./tests): Directory containing test files:
    * [1-my_list.txt](./1-my_list.txt)
    * [7-base_geometry.txt](./7-base_geometry.txt)

## Function Prototypes :floppy_disk:

Below are the prototypes for the functions implemented in this project:

| File                    | Prototype                             |
| ----------------------- | ------------------------------------- |
| `0-lookup.py`           | `def lookup(obj):`                    |
| `2-is_same_class.py`    | `def is_same_class(obj, a_class):`    |
| `3-is_kind_of_class.py` | `def is_kind_of_class(obj, a_class):` |
| `4-inherits_from.py`    | `def inherits_from(obj, a_class):`    |
| `101-add_attribute.py`  | `def add_attribute(obj, att, value):` |

## Tasks :page_with_curl:

* **0. Lookup**
  * [0-lookup.py](./0-lookup.py): Python function returning a list of available attributes and methods of an object.

* **1. My list**
  * [1-my_list.py](./1-my_list.py): Python class `MyList` inheriting from `list`. It includes:
    * Public instance method `def print_sorted(self):` to print the list in ascending sorted order (assuming all list elements are integers).

* **2. Exact same object**
  * [2-is_same_class.py](./2-is_same_class.py): Python function returning `True` if an object is exactly an instance of a specified class; otherwise `False`.

* **3. Same class or inherit from**
  * [3-is_kind_of_class.py](./3-is_kind_of_class.py): Python function returning `True` if an object is an instance or inherited instance of a specified class; otherwise `False`.

* **4. Only sub class of**
  * [4-inherits_from.py](./4-inherits_from.py): Python function returning `True` if an object is an inherited instance (either directly or indirectly) from a specified class; otherwise `False`.

* **5. Geometry module**
  * [5-base_geometry.py](./5-base_geometry.py): An empty Python class `BaseGeometry`.

* **6. Improve Geometry**
  * [6-base_geometry.py](./6-base_geometry.py): Python class `BaseGeometry`. It enhances [5-base_geometry.py](./5-base_geometry.py) with:
    * Public instance method `def area(self):` that raises an `Exception` with the message `area() is not implemented`.

* **7. Integer validator**
  * [7-base_geometry.py](./7-base_geometry.py): Python class `BaseGeometry`. It builds on [6-base_geometry.py](./6-base_geometry.py) with:
    * Public instance method `def integer_validator(self, name, value):` that validates the parameter `value`.
    * Assumes the parameter `name` is always a string.
    * The parameter `value` must be an `int`, otherwise, a `TypeError` exception is raised with the message `<name> must be an integer`.
    * The parameter `value` must be greater than `0`, otherwise, a `ValueError` exception is raised with the message `<value> must be greater than 0`.

* **8. Rectangle**
  * [8-rectangle.py](./8-rectangle.py): Python class `Rectangle` inheriting from `BaseGeometry` ([7-base_geometry.py](./7-base_geometry.py)). It includes:
    * Private attributes `width` and `height` - validated with `integer_validator`.
    * Instantiation with `width` and `height`: `def __init__(self, width, height):`

* **9. Full rectangle**
  * [9-rectangle.py](./9-rectangle.py): Python class `Rectangle` inheriting from `BaseGeometry` ([7-base_geometry.py](./7-base_geometry.py)). It builds on [8-rectangle.py](./8-rectangle.py) with:
    * Implementation of the method `area()`.
    * Special method `__str__` to print `Rectangle`s in the format `[Rectangle] <width>/<height>`.

* **10. Square #1**
  * [10-square.py](./10-square.py): Python class `Square` inheriting from `Rectangle` ([9-rectangle.py](./9-rectangle.py)). It includes:
    * Private attribute `size` - validated with `integer_validator`.
    * Instantiation with `size`: `def __init__(self, size):`.
    * Implementation of the `area()` method.

* **11. Square #2**
  * [11-square.py](./11-square.py): Python class `Square` inheriting from `Rectangle` ([9-rectangle.py](./9-rectangle.py)). It builds on [10-square.py](./10-square.py) with:
    * Special method `__str__` to print squares in the format `[Square] <width>/<height>`.

* **12. My integer**
  * [100-my_int.py](./100-my_int.py): Python class `MyInt` inheriting from `int`. It includes:
    * Inversion of the `==` and `!=` operators.

* **13. Can I?**
  * [101-add_attribute.py](./101-add_attribute.py): Python function adding a new attribute to an object if possible.
    * If an attribute cannot be added, a `TypeError` exception is raised with the message `can't add new attribute`.
