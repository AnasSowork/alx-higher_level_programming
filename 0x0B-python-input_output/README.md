# Python - Input/Output Refactored

This project delves into file handling in Python, emphasizing the use of the built-in `with`, `open`, and `read` functions along with the `json` module. The primary focus is on reading and writing files and serializing and deserializing objects using JSON.

## Function Prototypes :floppy_disk:

Prototypes for functions written in this project:

| File                    | Prototype                                 |
| ----------------------- | ----------------------------------------- |
| `0-read_file.py`        | `def read_file(filename=""):`
| `1-number_of_lines.py`  | `def number_of_lines(filename=""):`
| `2-read_lines.py`       | `def read_lines(filename="", nb_lines=0):`
| `3-write_file.py`       | `def write_file(filename="", text=""):`
| `2-append_write.py`     | `def append_write(filename="", text=""):`
| `3-to_json_string.py`   | `def to_json_string(my_obj):`
| `4-from_json_string.py` | `def from_json_string(my_str):`
| `5-save_to_json_file.py`| `def save_to_json_file(my_obj, filename):`
| `6-load_from_json_file.py` | `def load_from_json_file(filename):`
| `8-class_to_json.py`    | `def class_to_json(obj):`
| `12-pascal_triangle.py` | `def pascal_triangle(n):`
| `100-append_after.py`   | `def append_after(filename="", search_string="", new_string=""):`

## Tasks :page_with_curl:

...

* **12. Pascal's Triangle**
  * [12-pascal_triangle.py](./12-pascal_triangle.py): Python function that returns a list of lists of integers representing Pascal's triangle of size `n`.
  * Assumes the size parameter `n` is an integer.
  * If `n` is less than or equal to `0`, returns an empty list.

* **13. Search and update**
  * [100-append_after.py](./100-append_after.py): Python function that inserts a line of text into a file after each line containing a specified string.

* **14. Log parsing**
  * [101-stats.py](./101-stats.py): Python script that reads lines from standard input. After every 10 lines or the input of a keyboard interruption (`CTRL + C`), computes the following metrics:
    * Total file size up to that point: `File size: <total size>`
    * Status code of each read line, printed in ascending order:  `<status code>: <number>`
  * Input format: `<IP Address> - [<date>] "GET /projects/260 HTTP/1.1" <status code> <file size>`
