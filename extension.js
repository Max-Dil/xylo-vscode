const vscode = require('vscode');

const builtins = [
    { label: 'if', kind: vscode.CompletionItemKind.Keyword, detail: 'if', documentation: 'Conditional statement.' },
    { label: 'else', kind: vscode.CompletionItemKind.Keyword, detail: 'else', documentation: 'Alternative branch of an if statement.' },
    { label: 'while', kind: vscode.CompletionItemKind.Keyword, detail: 'while', documentation: 'Loop with a condition.' },
    { label: 'for', kind: vscode.CompletionItemKind.Keyword, detail: 'for', documentation: 'Loop with iteration.' },
    { label: 'do', kind: vscode.CompletionItemKind.Keyword, detail: 'do', documentation: 'Start of a block for while loop.' },
    { label: 'end', kind: vscode.CompletionItemKind.Keyword, detail: 'end', documentation: 'End of a block.' },
    { label: 'break', kind: vscode.CompletionItemKind.Keyword, detail: 'break', documentation: 'Exits a loop.' },
    { label: 'return', kind: vscode.CompletionItemKind.Keyword, detail: 'return', documentation: 'Returns a value from a function.' },
    { label: 'local', kind: vscode.CompletionItemKind.Keyword, detail: 'local', documentation: 'Declares a local variable.' },
    { label: 'function', kind: vscode.CompletionItemKind.Keyword, detail: 'function', documentation: 'Declares a function.' },
    { label: 'fun', kind: vscode.CompletionItemKind.Keyword, detail: 'fun', documentation: 'Shorthand for function declaration.' },
    { label: 'require', kind: vscode.CompletionItemKind.Keyword, detail: 'require', documentation: 'Imports a module.' },
    { label: 'class', kind: vscode.CompletionItemKind.Keyword, detail: 'class', documentation: 'Defines a class.' },
    { label: 'extends', kind: vscode.CompletionItemKind.Keyword, detail: 'extends', documentation: 'Inherits from a parent class.' },
    { label: 'static', kind: vscode.CompletionItemKind.Keyword, detail: 'static', documentation: 'Declares a static member.' },
    { label: 'private', kind: vscode.CompletionItemKind.Keyword, detail: 'private', documentation: 'Declares a private member.' },
    { label: 'public', kind: vscode.CompletionItemKind.Keyword, detail: 'public', documentation: 'Declares a public member.' },
    { label: 'init', kind: vscode.CompletionItemKind.Keyword, detail: 'init', documentation: 'Constructor for a class.' },
    { label: 'number', kind: vscode.CompletionItemKind.Keyword, detail: 'number', documentation: 'Type annotation for numbers.' },
    { label: 'string', kind: vscode.CompletionItemKind.Keyword, detail: 'string', documentation: 'Type annotation for strings.' },
    { label: 'boolean', kind: vscode.CompletionItemKind.Keyword, detail: 'boolean', documentation: 'Type annotation for booleans.' },
    { label: 'array', kind: vscode.CompletionItemKind.Keyword, detail: 'array', documentation: 'Type annotation for arrays.' },
    { label: 'table', kind: vscode.CompletionItemKind.Keyword, detail: 'table', documentation: 'Type annotation for tables.' },
    { label: 'null', kind: vscode.CompletionItemKind.Keyword, detail: 'null', documentation: 'Represents a null value.' },
    { label: 'undefined', kind: vscode.CompletionItemKind.Keyword, detail: 'undefined', documentation: 'Represents an undefined value.' }, // Исправлено с "undefinedm" на "undefined"
    { label: 'global', kind: vscode.CompletionItemKind.Keyword, detail: 'global', documentation: 'Declares a global variable.' },
    { label: 'switch', kind: vscode.CompletionItemKind.Keyword, detail: 'switch', documentation: 'Switch statement.' },
    { label: 'case', kind: vscode.CompletionItemKind.Keyword, detail: 'case', documentation: 'Case branch in a switch statement.' },
    { label: 'try', kind: vscode.CompletionItemKind.Keyword, detail: 'try', documentation: 'Start of an exception handling block.' },
    { label: 'catch', kind: vscode.CompletionItemKind.Keyword, detail: 'catch', documentation: 'Handles an exception.' },
    { label: 'default', kind: vscode.CompletionItemKind.Keyword, detail: 'default', documentation: 'Default branch in a switch statement.' },

	{ label: 'pcall', kind: vscode.CompletionItemKind.Function, detail: 'pcall(func: function, ...args): table', documentation: 'Safely executes a function with error handling. Returns {result, error, isComplete}.' },
	{ label: 'assert', kind: vscode.CompletionItemKind.Function, detail: 'assert(condition: any, message: string)', documentation: 'Checks a condition and throws an error if false.' },
	{ label: 'error', kind: vscode.CompletionItemKind.Function, detail: 'error(message: string)', documentation: 'Throws an error with the given message.' },
	{ label: 'xpcall', kind: vscode.CompletionItemKind.Function, detail: 'xpcall(func: function, errHandler: function, ...args): table', documentation: 'Executes a function with a custom error handler.' },
	{ label: 'tonumber', kind: vscode.CompletionItemKind.Function, detail: 'tonumber(value: any, base?: number): number | nil', documentation: 'Converts a value to a number.' },
	{ label: 'tostring', kind: vscode.CompletionItemKind.Function, detail: 'tostring(value: any): string', documentation: 'Converts a value to a string.' },
	{ label: 'type', kind: vscode.CompletionItemKind.Function, detail: 'type(value: any): string', documentation: 'Returns the type of a value as a string.' },
	{ label: 'warn', kind: vscode.CompletionItemKind.Function, detail: 'warn(message: string)', documentation: 'Prints a warning to the console.' },
	{ label: 'len', kind: vscode.CompletionItemKind.Function, detail: 'len(...values: any): number', documentation: 'Returns the total length of values.' },
	{ label: 'ipairs', kind: vscode.CompletionItemKind.Function, detail: 'ipairs(table: table): iterator', documentation: 'Creates an indexed iterator for arrays.' },
	{ label: 'pairs', kind: vscode.CompletionItemKind.Function, detail: 'pairs(table: table): iterator', documentation: 'Creates an iterator for all table keys.' },
	{ label: 'next', kind: vscode.CompletionItemKind.Function, detail: 'next(table: table, state?: any): key, value', documentation: 'Returns the next key-value pair in a table.' },
	{ label: 'print', kind: vscode.CompletionItemKind.Function, detail: 'print(...values: any)', documentation: 'Prints values to the console.' },
	{ label: 'await', kind: vscode.CompletionItemKind.Function, detail: 'await(func: function, ...args): any', documentation: 'Executes a function in a separate thread and awaits its result.' },
	{ label: 'awaitListener', kind: vscode.CompletionItemKind.Function, detail: 'awaitListener(func: function, listener: function, ...args)', documentation: 'Executes a function in a thread and calls a listener on completion.' },
	{ label: 'loadstring', kind: vscode.CompletionItemKind.Function, detail: 'loadstring(code: string): any', documentation: 'Compiles and executes a string as Xylo code.' },
	{ label: 'setenv', kind: vscode.CompletionItemKind.Function, detail: 'setenv(func: function, env: table | nil): function', documentation: 'Sets the environment for a function.' },

	{ label: 'math.pi', kind: vscode.CompletionItemKind.Variable, detail: 'math.pi: number', documentation: 'The mathematical constant Pi (≈3.14159).' },
	{ label: 'math.huge', kind: vscode.CompletionItemKind.Variable, detail: 'math.huge: number', documentation: 'Represents infinity.' },

	{ label: 'math.abs', kind: vscode.CompletionItemKind.Function, detail: 'math.abs(x: number): number', documentation: 'Returns the absolute value of a number.' },
	{ label: '/Category/ath.acos', kind: vscode.CompletionItemKind.Function, detail: 'math.acos(x: number): number', documentation: 'Returns the arccosine of x in radians.' },
	{ label: 'math.asin', kind: vscode.CompletionItemKind.Function, detail: 'math.asin(x: number): number', documentation: 'Returns the arcsine of x in radians.' },
	{ label: 'math.atan', kind: vscode.CompletionItemKind.Function, detail: 'math.atan(x: number): number', documentation: 'Returns the arctangent of x in radians.' },
	{ label: 'math.atan2', kind: vscode.CompletionItemKind.Function, detail: 'math.atan2(y: number, x: number): number', documentation: 'Returns the arctangent with quadrant consideration.' },
	{ label: 'math.ceil', kind: vscode.CompletionItemKind.Function, detail: 'math.ceil(x: number): number', documentation: 'Rounds a number up.' },
	{ label: 'math.cos', kind: vscode.CompletionItemKind.Function, detail: 'math.cos(x: number): number', documentation: 'Returns the cosine of x in radians.' },
	{ label: 'math.cosh', kind: vscode.CompletionItemKind.Function, detail: 'math.cosh(x: number): number', documentation: 'Returns the hyperbolic cosine of x.' },
	{ label: 'math.deg', kind: vscode.CompletionItemKind.Function, detail: 'math.deg(rad: number): number', documentation: 'Converts radians to degrees.' },
	{ label: 'math.exp', kind: vscode.CompletionItemKind.Function, detail: 'math.exp(x: number): number', documentation: 'Returns e raised to the power of x.' },
	{ label: 'math.floor', kind: vscode.CompletionItemKind.Function, detail: 'math.floor(x: number): number', documentation: 'Rounds a number down.' },
	{ label: 'math.fmod', kind: vscode.CompletionItemKind.Function, detail: 'math.fmod(a: number, b: number): number', documentation: 'Returns the remainder of a division.' },
	{ label: 'math.frexp', kind: vscode.CompletionItemKind.Function, detail: 'math.frexp(x: number): table', documentation: 'Decomposes a number into mantissa and exponent.' },
	{ label: 'math.ldexp', kind: vscode.CompletionItemKind.Function, detail: 'math.ldexp(m: number, e: number): number', documentation: 'Inverse of frexp: m * 2^e.' },
	{ label: 'math.log', kind: vscode.CompletionItemKind.Function, detail: 'math.log(x: number, base?: number): number', documentation: 'Returns the logarithm of x.' },
	{ label: 'math.log10', kind: vscode.CompletionItemKind.Function, detail: 'math.log10(x: number): number', documentation: 'Returns the base-10 logarithm of x.' },
	{ label: 'math.max', kind: vscode.CompletionItemKind.Function, detail: 'math.max(...args: number): number', documentation: 'Returns the maximum of numbers.' },
	{ label: 'math.min', kind: vscode.CompletionItemKind.Function, detail: 'math.min(...args: number): number', documentation: 'Returns the minimum of numbers.' },
	{ label: 'math.modf', kind: vscode.CompletionItemKind.Function, detail: 'math.modf(x: number): table', documentation: 'Returns integer and fractional parts of x.' },
	{ label: 'math.pow', kind: vscode.CompletionItemKind.Function, detail: 'math.pow(x: number, y: number): number', documentation: 'Raises x to the power of y.' },
	{ label: 'math.rad', kind: vscode.CompletionItemKind.Function, detail: 'math.rad(deg: number): number', documentation: 'Converts degrees to radians.' },
	{ label: 'math.random', kind: vscode.CompletionItemKind.Function, detail: 'math.random(m?: number, n?: number): number', documentation: 'Generates a random number.' },
	{ label: 'math.randomseed', kind: vscode.CompletionItemKind.Function, detail: 'math.randomseed(seed?: number)', documentation: 'Sets the seed for random number generation.' },
	{ label: 'math.round', kind: vscode.CompletionItemKind.Function, detail: 'math.round(x: number): number', documentation: 'Rounds a number up (alias for ceil).' },
	{ label: 'math.sin', kind: vscode.CompletionItemKind.Function, detail: 'math.sin(x: number): number', documentation: 'Returns the sine of x in radians.' },
	{ label: 'math.sinh', kind: vscode.CompletionItemKind.Function, detail: 'math.sinh(x: number): number', documentation: 'Returns the hyperbolic sine of x.' },
	{ label: 'math.sqrt', kind: vscode.CompletionItemKind.Function, detail: 'math.sqrt(x: number): number', documentation: 'Returns the square root of x.' },
	{ label: 'math.tan', kind: vscode.CompletionItemKind.Function, detail: 'math.tan(x: number): number', documentation: 'Returns the tangent of x in radians.' },
	{ label: 'math.tanh', kind: vscode.CompletionItemKind.Function, detail: 'math.tanh(x: number): number', documentation: 'Returns the hyperbolic tangent of x.' },
	{ label: 'math.ult', kind: vscode.CompletionItemKind.Function, detail: 'math.ult(m: number, n: number): boolean', documentation: 'Compares numbers as unsigned integers.' },
	{ label: 'math.lerp', kind: vscode.CompletionItemKind.Function, detail: 'math.lerp(t: number, a: number, b: number): number', documentation: 'Linear interpolation between a and b.' },
	{ label: 'math.clamp', kind: vscode.CompletionItemKind.Function, detail: 'math.clamp(value: number, min: number, max: number): number', documentation: 'Clamps a value between min and max.' },
	{ label: 'math.smoothstep', kind: vscode.CompletionItemKind.Function, detail: 'math.smoothstep(t: number, a: number, b: number): number', documentation: 'Smooth interpolation between a and b.' },
	{ label: 'math.toPolar', kind: vscode.CompletionItemKind.Function, detail: 'math.toPolar(x: number, y: number): table', documentation: 'Converts Cartesian to polar coordinates.' },
	{ label: 'math.fromPolar', kind: vscode.CompletionItemKind.Function, detail: 'math.fromPolar(r: number, theta: number): table', documentation: 'Converts polar to Cartesian coordinates.' },
	{ label: 'math.vec.create', kind: vscode.CompletionItemKind.Function, detail: 'math.vec.create(...components: number): table', documentation: 'Creates a vector.' },
	{ label: 'math.vec.add', kind: vscode.CompletionItemKind.Function, detail: 'math.vec.add(a: table, b: table): table', documentation: 'Adds two vectors.' },
	{ label: 'math.vec.sub', kind: vscode.CompletionItemKind.Function, detail: 'math.vec.sub(a: table, b: table): table', documentation: 'Subtracts two vectors.' },
	{ label: 'math.vec.scale', kind: vscode.CompletionItemKind.Function, detail: 'math.vec.scale(v: table, scalar: number): table', documentation: 'Scales a vector by a scalar.' },
	{ label: 'math.vec.dot', kind: vscode.CompletionItemKind.Function, detail: 'math.vec.dot(a: table, b: table): number', documentation: 'Computes the dot product of two vectors.' },
	{ label: 'math.vec.cross', kind: vscode.CompletionItemKind.Function, detail: 'math.vec.cross(a: table, b: table): table', documentation: 'Computes the cross product of two 3D vectors.' },
	{ label: 'math.vec.mag', kind: vscode.CompletionItemKind.Function, detail: 'math.vec.mag(v: table): number', documentation: 'Returns the magnitude of a vector.' },
	{ label: 'math.vec.normalize', kind: vscode.CompletionItemKind.Function, detail: 'math.vec.normalize(v: table): table', documentation: 'Normalizes a vector.' },
	{ label: 'math.vec.dist', kind: vscode.CompletionItemKind.Function, detail: 'math.vec.dist(a: table, b: table): number', documentation: 'Returns the distance between two vectors.' },
	{ label: 'math.vec.angleBetween', kind: vscode.CompletionItemKind.Function, detail: 'math.vec.angleBetween(a: table, b: table): number', documentation: 'Returns the angle between two vectors in radians.' },
	{ label: 'math.mat.create', kind: vscode.CompletionItemKind.Function, detail: 'math.mat.create(rows: table): table', documentation: 'Creates a matrix.' },
	{ label: 'math.mat.identity', kind: vscode.CompletionItemKind.Function, detail: 'math.mat.identity(n: number): table', documentation: 'Creates an n×n identity matrix.' },
	{ label: 'math.mat.transpose', kind: vscode.CompletionItemKind.Function, detail: 'math.mat.transpose(m: table): table', documentation: 'Transposes a matrix.' },
	{ label: 'math.mat.multiply', kind: vscode.CompletionItemKind.Function, detail: 'math.mat.multiply(a: table, b: table): table', documentation: 'Multiplies two matrices.' },
	{ label: 'math.mat.determinant', kind: vscode.CompletionItemKind.Function, detail: 'math.mat.determinant(m: table): number', documentation: 'Computes the determinant of a matrix.' },
	{ label: 'math.mat.inverse', kind: vscode.CompletionItemKind.Function, detail: 'math.mat.inverse(m: table): table', documentation: 'Computes the inverse of a matrix.' },
	{ label: 'math.mat.rotation2D', kind: vscode.CompletionItemKind.Function, detail: 'math.mat.rotation2D(theta: number): table', documentation: 'Creates a 2D rotation matrix.' },
	{ label: 'math.mat.rotationX', kind: vscode.CompletionItemKind.Function, detail: 'math.mat.rotationX(theta: number): table', documentation: 'Creates a 3D rotation matrix around X axis.' },
	{ label: 'math.mat.rotationY', kind: vscode.CompletionItemKind.Function, detail: 'math.mat.rotationY(theta: number): table', documentation: 'Creates a 3D rotation matrix around Y axis.' },
	{ label: 'math.mat.rotationZ', kind: vscode.CompletionItemKind.Function, detail: 'math.mat.rotationZ(theta: number): table', documentation: 'Creates a 3D rotation matrix around Z axis.' },

	{ label: 'os.time', kind: vscode.CompletionItemKind.Function, detail: 'os.time(): number', documentation: 'Returns the current time in milliseconds since Unix epoch.' },
	{ label: 'os.date', kind: vscode.CompletionItemKind.Function, detail: 'os.date(format: string, time?: number): string', documentation: 'Formats date and time.' },
	{ label: 'os.difftime', kind: vscode.CompletionItemKind.Function, detail: 'os.difftime(t2: number, t1: number): number', documentation: 'Returns the difference between two timestamps in seconds.' },
	{ label: 'os.clock', kind: vscode.CompletionItemKind.Function, detail: 'os.clock(): number', documentation: 'Returns process runtime in seconds with high precision.' },
	{ label: 'os.sleep', kind: vscode.CompletionItemKind.Function, detail: 'os.sleep(ms: number)', documentation: 'Asynchronously delays execution for ms milliseconds.' },
	{ label: 'os.execute', kind: vscode.CompletionItemKind.Function, detail: 'os.execute(command: string): table', documentation: 'Executes a system command (Node.js only).' },
	{ label: 'os.getenv', kind: vscode.CompletionItemKind.Function, detail: 'os.getenv(varname: string): string | nil', documentation: 'Gets an environment variable.' },
	{ label: 'os.exit', kind: vscode.CompletionItemKind.Function, detail: 'os.exit(code?: number)', documentation: 'Exits the program with an optional code.' },
	{ label: 'os.tmpname', kind: vscode.CompletionItemKind.Function, detail: 'os.tmpname(): string', documentation: 'Generates a temporary file name.' },
	{ label: 'os.setenv', kind: vscode.CompletionItemKind.Function, detail: 'os.setenv(name: string, value: string)', documentation: 'Sets an environment variable (browser only).' },

	{ label: 'string.byte', kind: vscode.CompletionItemKind.Function, detail: 'string.byte(s: string, i?: number): number', documentation: 'Returns the byte code of a character at index i.' },
	{ label: 'string.char', kind: vscode.CompletionItemKind.Function, detail: 'string.char(...args: number): string', documentation: 'Converts byte codes to a string.' },
	{ label: 'string.dump', kind: vscode.CompletionItemKind.Function, detail: 'string.dump(func: function): string', documentation: 'Returns a string representation of a function.' },
	{ label: 'string.find', kind: vscode.CompletionItemKind.Function, detail: 'string.find(s: string, pattern: string, init?: number, plain?: boolean): table | nil', documentation: 'Finds the first occurrence of a pattern.' },
	{ label: 'string.format', kind: vscode.CompletionItemKind.Function, detail: 'string.format(formatString: string, ...args): string', documentation: 'Formats a string with specifiers.' },
	{ label: 'string.gmatch', kind: vscode.CompletionItemKind.Function, detail: 'string.gmatch(s: string, pattern: string): table', documentation: 'Returns an iterator for all pattern matches.' },
	{ label: 'string.gsub', kind: vscode.CompletionItemKind.Function, detail: 'string.gsub(s: string, pattern: string, repl: string | function | any, n?: number): string', documentation: 'Replaces all pattern occurrences.' },
	{ label: 'string.len', kind: vscode.CompletionItemKind.Function, detail: 'string.len(s: string): number', documentation: 'Returns the length of a string.' },
	{ label: 'string.lower', kind: vscode.CompletionItemKind.Function, detail: 'string.lower(s: string): string', documentation: 'Converts a string to lowercase.' },
	{ label: 'string.match', kind: vscode.CompletionItemKind.Function, detail: 'string.match(s: string, pattern: string, init?: number): string | table | nil', documentation: 'Extracts matches from a pattern.' },
	{ label: 'string.rep', kind: vscode.CompletionItemKind.Function, detail: 'string.rep(s: string, n: number): string', documentation: 'Repeats a string n times.' },
	{ label: 'string.reverse', kind: vscode.CompletionItemKind.Function, detail: 'string.reverse(s: string): string', documentation: 'Reverses a string.' },
	{ label: 'string.sub', kind: vscode.CompletionItemKind.Function, detail: 'string.sub(s: string, i: number, j?: number): string', documentation: 'Extracts a substring from i to j.' },
	{ label: 'string.upper', kind: vscode.CompletionItemKind.Function, detail: 'string.upper(s: string): string', documentation: 'Converts a string to uppercase.' },
	{ label: 'string.split', kind: vscode.CompletionItemKind.Function, detail: 'string.split(s: string, sep?: string): table', documentation: 'Splits a string into an array.' },
	{ label: 'string.trim', kind: vscode.CompletionItemKind.Function, detail: 'string.trim(s: string): string', documentation: 'Trims whitespace from both ends.' },
	{ label: 'string.ltrim', kind: vscode.CompletionItemKind.Function, detail: 'string.ltrim(s: string): string', documentation: 'Trims whitespace from the left.' },
	{ label: 'string.rtrim', kind: vscode.CompletionItemKind.Function, detail: 'string.rtrim(s: string): string', documentation: 'Trims whitespace from the right.' },
	{ label: 'string.startsWith', kind: vscode.CompletionItemKind.Function, detail: 'string.startsWith(s: string, prefix: string): boolean', documentation: 'Checks if a string starts with a prefix.' },
	{ label: 'string.endsWith', kind: vscode.CompletionItemKind.Function, detail: 'string.endsWith(s: string, suffix: string): boolean', documentation: 'Checks if a string ends with a suffix.' },
	{ label: 'string.contains', kind: vscode.CompletionItemKind.Function, detail: 'string.contains(s: string, substring: string): boolean', documentation: 'Checks if a string contains a substring.' },
	{ label: 'string.padLeft', kind: vscode.CompletionItemKind.Function, detail: 'string.padLeft(s: string, length: number, char?: string): string', documentation: 'Pads a string on the left.' },
	{ label: 'string.padRight', kind: vscode.CompletionItemKind.Function, detail: 'string.padRight(s: string, length: number, char?: string): string', documentation: 'Pads a string on the right.' },
	{ label: 'string.capitalize', kind: vscode.CompletionItemKind.Function, detail: 'string.capitalize(s: string): string', documentation: 'Capitalizes the first letter.' },
	{ label: 'string.isEmpty', kind: vscode.CompletionItemKind.Function, detail: 'string.isEmpty(s: string): boolean', documentation: 'Checks if a string is empty.' },
	{ label: 'string.count', kind: vscode.CompletionItemKind.Function, detail: 'string.count(s: string, substring: string, start?: number, end?: number): number', documentation: 'Counts occurrences of a substring.' },
	{ label: 'string.join', kind: vscode.CompletionItemKind.Function, detail: 'string.join(array: table, separator?: string): string', documentation: 'Joins an array into a string.' },
	{ label: 'string.replaceFirst', kind: vscode.CompletionItemKind.Function, detail: 'string.replaceFirst(s: string, pattern: string, replacement: string): string', documentation: 'Replaces the first occurrence of a pattern.' },
	{ label: 'string.toBytes', kind: vscode.CompletionItemKind.Function, detail: 'string.toBytes(s: string): table', documentation: 'Converts a string to an array of byte codes.' },
	{ label: 'string.fromBytes', kind: vscode.CompletionItemKind.Function, detail: 'string.fromBytes(bytes: table): string', documentation: 'Converts an array of byte codes to a string.' },

	{ label: 'table.concat', kind: vscode.CompletionItemKind.Function, detail: 'table.concat(list: table, sep?: string, i?: number, j?: number): string', documentation: 'Concatenates array elements into a string.' },
	{ label: 'table.insert', kind: vscode.CompletionItemKind.Function, detail: 'table.insert(list: table, pos: number, value: any)', documentation: 'Inserts a value into an array at pos.' },
	{ label: 'table.remove', kind: vscode.CompletionItemKind.Function, detail: 'table.remove(list: table, pos?: number): any | nil', documentation: 'Removes and returns an element from an array.' },
	{ label: 'table.sort', kind: vscode.CompletionItemKind.Function, detail: 'table.sort(list: table, comp?: function)', documentation: 'Sorts an array in place.' },
	{ label: 'table.move', kind: vscode.CompletionItemKind.Function, detail: 'table.move(a1: table, f?: number, e?: number, t?: number, a2?: table): table', documentation: 'Moves elements from one array to another.' },
	{ label: 'table.sub', kind: vscode.CompletionItemKind.Function, detail: 'table.sub(list: table, start?: number, end?: number): table', documentation: 'Returns a subarray.' },
	{ label: 'table.maxn', kind: vscode.CompletionItemKind.Function, detail: 'table.maxn(list: table): number', documentation: 'Returns the maximum numeric index.' },
	{ label: 'table.pack', kind: vscode.CompletionItemKind.Function, detail: 'table.pack(...args: any): table', documentation: 'Packs arguments into a table with an n field.' },
	{ label: 'table.unpack', kind: vscode.CompletionItemKind.Function, detail: 'table.unpack(list: table, i?: number, j?: number): table', documentation: 'Unpacks array elements.' },
	{ label: 'table.find', kind: vscode.CompletionItemKind.Function, detail: 'table.find(list: table, value: any, init?: number): number | nil', documentation: 'Finds the first occurrence of a value.' },
	{ label: 'table.filter', kind: vscode.CompletionItemKind.Function, detail: 'table.filter(list: table, fn: function): table', documentation: 'Filters an array based on a function.' },
	{ label: 'table.map', kind: vscode.CompletionItemKind.Function, detail: 'table.map(list: table, fn: function): table', documentation: 'Maps a function over an array.' },
	{ label: 'table.forEach', kind: vscode.CompletionItemKind.Function, detail: 'table.forEach(list: table, fn: function)', documentation: 'Executes a function for each element.' },
	{ label: 'table.reduce', kind: vscode.CompletionItemKind.Function, detail: 'table.reduce(list: table, fn: function, initial?: any): any', documentation: 'Reduces an array to a single value.' },
	{ label: 'table.reverse', kind: vscode.CompletionItemKind.Function, detail: 'table.reverse(list: table): table', documentation: 'Returns a reversed array.' },
	{ label: 'table.contains', kind: vscode.CompletionItemKind.Function, detail: 'table.contains(list: table, value: any): boolean', documentation: 'Checks if an array contains a value.' },
	{ label: 'table.count', kind: vscode.CompletionItemKind.Function, detail: 'table.count(list: table, value: any): number', documentation: 'Counts occurrences of a value.' },
	{ label: 'table.merge', kind: vscode.CompletionItemKind.Function, detail: 'table.merge(list1: table, list2: table): table', documentation: 'Merges two arrays.' },
	{ label: 'table.unique', kind: vscode.CompletionItemKind.Function, detail: 'table.unique(list: table): table', documentation: 'Returns an array with unique elements.' },
	{ label: 'table.shuffle', kind: vscode.CompletionItemKind.Function, detail: 'table.shuffle(list: table): table', documentation: 'Returns a shuffled array.' },
	{ label: 'table.isEmpty', kind: vscode.CompletionItemKind.Function, detail: 'table.isEmpty(list: table): boolean', documentation: 'Checks if an array is empty.' },
	{ label: 'table.clone', kind: vscode.CompletionItemKind.Function, detail: 'table.clone(list: table): table', documentation: 'Returns a copy of an array.' },
	{ label: 'table.indexOf', kind: vscode.CompletionItemKind.Function, detail: 'table.indexOf(list: table, value: any, init?: number): number', documentation: 'Returns the first index of a value.' },
	{ label: 'table.lastIndexOf', kind: vscode.CompletionItemKind.Function, detail: 'table.lastIndexOf(list: table, value: any): number', documentation: 'Returns the last index of a value.' },
	{ label: 'table.every', kind: vscode.CompletionItemKind.Function, detail: 'table.every(list: table, fn: function): boolean', documentation: 'Checks if all elements satisfy a condition.' },
	{ label: 'table.some', kind: vscode.CompletionItemKind.Function, detail: 'table.some(list: table, fn: function): boolean', documentation: 'Checks if any element satisfies a condition.' },

	{ label: 'json.encode', kind: vscode.CompletionItemKind.Function, detail: 'json.encode(obj: any): string', documentation: 'Encodes an object to a JSON string.' },
	{ label: 'json.decode', kind: vscode.CompletionItemKind.Function, detail: 'json.decode(str: string): any', documentation: 'Decodes a JSON string to an object.' },
	{ label: 'json.isValid', kind: vscode.CompletionItemKind.Function, detail: 'json.isValid(str: string): boolean', documentation: 'Checks if a string is valid JSON.' },
	{ label: 'json.pretty', kind: vscode.CompletionItemKind.Function, detail: 'json.pretty(str: string, indent?: number): string', documentation: 'Formats a JSON string for readability.' },
	{ label: 'json.get', kind: vscode.CompletionItemKind.Function, detail: 'json.get(obj: table, path: string, defaultValue?: any): any', documentation: 'Safely gets a value by path in an object.' },

	{ label: 'http.get', kind: vscode.CompletionItemKind.Function, detail: 'http.get(url: string): table', documentation: 'Performs a GET request and returns the response body.' },
	{ label: 'http.post', kind: vscode.CompletionItemKind.Function, detail: 'http.post(url: string, data: table): table', documentation: 'Performs a POST request with JSON data.' },

	{ label: 'dom.get', kind: vscode.CompletionItemKind.Function, detail: 'dom.get(selector: string, parent?: table): table | nil', documentation: 'Finds the first element by selector.' },
	{ label: 'dom.getAll', kind: vscode.CompletionItemKind.Function, detail: 'dom.getAll(selector: string, parent?: table): table', documentation: 'Finds all elements by selector.' },
	{ label: 'dom.byId', kind: vscode.CompletionItemKind.Function, detail: 'dom.byId(id: string): table | nil', documentation: 'Finds an element by ID.' },
	{ label: 'dom.create', kind: vscode.CompletionItemKind.Function, detail: 'dom.create(tagName: string, options?: table): table', documentation: 'Creates a new DOM element.' },
	{ label: 'dom.append', kind: vscode.CompletionItemKind.Function, detail: 'dom.append(parent: table, ...children: table): table', documentation: 'Appends children to a parent element.' },
	{ label: 'dom.remove', kind: vscode.CompletionItemKind.Function, detail: 'dom.remove(el: table): table', documentation: 'Removes an element from the DOM.' },
	{ label: 'dom.addClass', kind: vscode.CompletionItemKind.Function, detail: 'dom.addClass(el: table, ...classes: string): table', documentation: 'Adds classes to an element.' },
	{ label: 'dom.removeClass', kind: vscode.CompletionItemKind.Function, detail: 'dom.removeClass(el: table, ...classes: string): table', documentation: 'Removes classes from an element.' },
	{ label: 'dom.css', kind: vscode.CompletionItemKind.Function, detail: 'dom.css(el: table, styles: table | string): table | string', documentation: 'Sets or gets element styles.' },
	{ label: 'dom.on', kind: vscode.CompletionItemKind.Function, detail: 'dom.on(el: table, event: string, handler: function, options?: table): function', documentation: 'Adds an event listener.' },
	{ label: 'dom.val', kind: vscode.CompletionItemKind.Function, detail: 'dom.val(el: table, value?: any): table | string', documentation: 'Sets or gets an element’s value.' },
	{ label: 'dom.animate', kind: vscode.CompletionItemKind.Function, detail: 'dom.animate(el: table, keyframes: table, options: table): table', documentation: 'Animates an element.' },
	{ label: 'dom.show', kind: vscode.CompletionItemKind.Function, detail: 'dom.show(el: table): table', documentation: 'Shows an element.' },
	{ label: 'dom.hide', kind: vscode.CompletionItemKind.Function, detail: 'dom.hide(el: table): table', documentation: 'Hides an element.' },
	{ label: 'dom.fetch', kind: vscode.CompletionItemKind.Function, detail: 'dom.fetch(url: string, options?: table): table', documentation: 'Performs an HTTP request.' },
	{ label: 'dom.trigger', kind: vscode.CompletionItemKind.Function, detail: 'dom.trigger(el: table, eventName: string, detail?: any): table', documentation: 'Triggers a custom event.' },
	{ label: 'dom.data', kind: vscode.CompletionItemKind.Function, detail: 'dom.data(el: table, key: string, value?: any): table | string', documentation: 'Sets or gets data attributes.' },
	{ label: 'dom.delegate', kind: vscode.CompletionItemKind.Function, detail: 'dom.delegate(parent: table, event: string, selector: string, handler: function): function', documentation: 'Delegates events to elements by selector.' },
	{ label: 'dom.isVisible', kind: vscode.CompletionItemKind.Function, detail: 'dom.isVisible(el: table): boolean', documentation: 'Checks if an element is visible.' },
	{ label: 'dom.serialize', kind: vscode.CompletionItemKind.Function, detail: 'dom.serialize(form: table): table', documentation: 'Serializes form data to an object.' },
	{ label: 'dom.prepend', kind: vscode.CompletionItemKind.Function, detail: 'dom.prepend(parent: table, ...children: table): table', documentation: 'Prepends children to a parent.' },
	{ label: 'dom.before', kind: vscode.CompletionItemKind.Function, detail: 'dom.before(el: table, ...siblings: table): table', documentation: 'Inserts elements before an element.' },
	{ label: 'dom.after', kind: vscode.CompletionItemKind.Function, detail: 'dom.after(el: table, ...siblings: table): table', documentation: 'Inserts elements after an element.' },
	{ label: 'dom.toggleClass', kind: vscode.CompletionItemKind.Function, detail: 'dom.toggleClass(el: table, className: string): table', documentation: 'Toggles a class on an element.' },
	{ label: 'dom.hasClass', kind: vscode.CompletionItemKind.Function, detail: 'dom.hasClass(el: table, className: string): boolean', documentation: 'Checks if an element has a class.' },
	{ label: 'dom.attr', kind: vscode.CompletionItemKind.Function, detail: 'dom.attr(el: table, name: string, value?: any): table | string', documentation: 'Sets or gets an attribute.' },
	{ label: 'dom.replace', kind: vscode.CompletionItemKind.Function, detail: 'dom.replace(oldEl: table, newEl: table): table', documentation: 'Replaces an old element with a new one.' },
	{ label: 'dom.clone', kind: vscode.CompletionItemKind.Function, detail: 'dom.clone(el: table, deep?: boolean): table', documentation: 'Clones an element.' },
	{ label: 'dom.children', kind: vscode.CompletionItemKind.Function, detail: 'dom.children(el: table): table', documentation: 'Returns an array of child elements.' },
	{ label: 'dom.parent', kind: vscode.CompletionItemKind.Function, detail: 'dom.parent(el: table): table | nil', documentation: 'Returns the parent element.' },
	{ label: 'dom.siblings', kind: vscode.CompletionItemKind.Function, detail: 'dom.siblings(el: table): table', documentation: 'Returns an array of sibling elements.' },
	{ label: 'dom.closest', kind: vscode.CompletionItemKind.Function, detail: 'dom.closest(el: table, selector: string): table | nil', documentation: 'Finds the closest ancestor by selector.' },
	{ label: 'dom.matches', kind: vscode.CompletionItemKind.Function, detail: 'dom.matches(el: table, selector: string): boolean', documentation: 'Checks if an element matches a selector.' },
	{ label: 'dom.toggle', kind: vscode.CompletionItemKind.Function, detail: 'dom.toggle(el: table): table', documentation: 'Toggles an element’s visibility.' },
	{ label: 'dom.scrollTo', kind: vscode.CompletionItemKind.Function, detail: 'dom.scrollTo(el: table, options?: table): table', documentation: 'Scrolls to an element.' },
	{ label: 'dom.getStyle', kind: vscode.CompletionItemKind.Function, detail: 'dom.getStyle(el: table, property: string): string', documentation: 'Gets a computed style value.' },
	{ label: 'dom.debug', kind: vscode.CompletionItemKind.Function, detail: 'dom.debug(el: table): table', documentation: 'Logs debugging info about an element.' },
	{ label: 'dom.batchUpdate', kind: vscode.CompletionItemKind.Function, detail: 'dom.batchUpdate(parent: table, updates: table): table', documentation: 'Performs batch DOM updates.' },
	{ label: 'dom.observe', kind: vscode.CompletionItemKind.Function, detail: 'dom.observe(el: table, callback: function, options?: table): function', documentation: 'Observes element changes.' },
	{ label: 'dom.loadScript', kind: vscode.CompletionItemKind.Function, detail: 'dom.loadScript(src: string, options?: table): table', documentation: 'Loads a script into the head.' },
	{ label: 'dom.loadStyle', kind: vscode.CompletionItemKind.Function, detail: 'dom.loadStyle(href: string, options?: table): table', documentation: 'Loads a stylesheet into the head.' },
	{ label: 'dom.findByText', kind: vscode.CompletionItemKind.Function, detail: 'dom.findByText(text: string, parent?: table): table', documentation: 'Finds elements by text content.' },
	{ label: 'dom.disable', kind: vscode.CompletionItemKind.Function, detail: 'dom.disable(el: table): table', documentation: 'Disables an element.' },
	{ label: 'dom.enable', kind: vscode.CompletionItemKind.Function, detail: 'dom.enable(el: table): table', documentation: 'Enables an element.' },
	{ label: 'dom.setFocus', kind: vscode.CompletionItemKind.Function, detail: 'dom.setFocus(el: table): table', documentation: 'Sets focus on an element.' },
	{ label: 'dom.clear', kind: vscode.CompletionItemKind.Function, detail: 'dom.clear(el: table): table', documentation: 'Clears an element’s content.' },

	{ label: 'noise.F2', kind: vscode.CompletionItemKind.Variable, detail: 'noise.F2: number', documentation: 'Constant for 2D Simplex noise (≈0.366).' },
	{ label: 'noise.G2', kind: vscode.CompletionItemKind.Variable, detail: 'noise.G2: number', documentation: 'Constant for 2D Simplex noise (≈0.211).' },
	{ label: 'noise.F3', kind: vscode.CompletionItemKind.Variable, detail: 'noise.F3: number', documentation: 'Constant for 3D Perlin noise (1/3).' },
	{ label: 'noise.G3', kind: vscode.CompletionItemKind.Variable, detail: 'noise.G3: number', documentation: 'Constant for 3D Perlin noise (1/6).' },

	{ label: 'noise.init', kind: vscode.CompletionItemKind.Function, detail: 'noise.init(seed?: number)', documentation: 'Initializes the noise generator with a seed.' },
	{ label: 'noise.perlin1D', kind: vscode.CompletionItemKind.Function, detail: 'noise.perlin1D(x: number, seed?: number): number', documentation: 'Generates 1D Perlin noise.' },
	{ label: 'noise.perlin2D', kind: vscode.CompletionItemKind.Function, detail: 'noise.perlin2D(x: number, y: number, seed?: number): number', documentation: 'Generates 2D Perlin noise.' },
	{ label: 'noise.perlin3D', kind: vscode.CompletionItemKind.Function, detail: 'noise.perlin3D(x: number, y: number, z: number, seed?: number): number', documentation: 'Generates 3D Perlin noise.' },
	{ label: 'noise.simplex2D', kind: vscode.CompletionItemKind.Function, detail: 'noise.simplex2D(x: number, y: number): number', documentation: 'Generates 2D Simplex noise.' },
	{ label: 'noise.fractalNoise', kind: vscode.CompletionItemKind.Function, detail: 'noise.fractalNoise(x: number, y: number, octaves?: number, persistence?: number, lacunarity?: number): number', documentation: 'Generates fractal noise.' },
	{ label: 'noise.fade', kind: vscode.CompletionItemKind.Function, detail: 'noise.fade(t: number): number', documentation: 'Applies a smoothing function for interpolation.' },
	{ label: 'noise.lerp', kind: vscode.CompletionItemKind.Function, detail: 'noise.lerp(a: number, b: number, t: number): number', documentation: 'Linear interpolation between a and b.' },
	{ label: 'noise.grad', kind: vscode.CompletionItemKind.Function, detail: 'noise.grad(hash: number, x: number, y: number, z: number): number', documentation: 'Computes a gradient scalar product.' },
	{ label: 'noise.dot', kind: vscode.CompletionItemKind.Function, detail: 'noise.dot(g: table, x: number, y: number): number', documentation: 'Computes a 2D gradient dot product.' },
	{ label: 'noise.dot3', kind: vscode.CompletionItemKind.Function, detail: 'noise.dot3(g: table, x: number, y: number, z: number): number', documentation: 'Computes a 3D gradient dot product.' }
];

function activate(context) {
    const collection = vscode.languages.createDiagnosticCollection('xylo');
    context.subscriptions.push(collection);

    vscode.workspace.onDidChangeTextDocument(event => {
        if (event.document.languageId === 'xylo') {
            lintDocument(event.document, collection);
        }
    });

    vscode.workspace.onDidOpenTextDocument(document => {
        if (document.languageId === 'xylo') {
            lintDocument(document, collection);
        }
    });

    const completionProvider = vscode.languages.registerCompletionItemProvider('xylo', {
        provideCompletionItems(document, position, token, context) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            const completions = [];

            builtins.forEach(item => {
                const completion = new vscode.CompletionItem(item.label, item.kind);
                completion.detail = item.detail;
                completion.documentation = new vscode.MarkdownString(item.documentation);
                completion.insertText = item.label.split('.').pop();

                if (linePrefix.endsWith('.')) {
                    const modulePrefix = linePrefix.slice(0, -1).split(' ').pop();
                    if (item.label.startsWith(modulePrefix + '.')) {
                        completions.push(completion);
                    }
                } else if (!linePrefix.includes('.')) {
                    completions.push(completion);
                }
            });

            return completions;
        }
    }, ['.', '(']);

    context.subscriptions.push(completionProvider);
}

function lintDocument(document, collection) {
    const diagnostics = [];
    const text = document.getText();
    const lines = text.split('\n');
    const variables = new Map();

    const declarationRegex = /(local|global)?\s*([a-zA-Zа-яА-ЯёЁ_][\wа-яА-ЯёЁ]*)\s*:\s*([a-zA-Z|\s]+)\s*=\s*([^;\n]+)/g;
    const assignmentRegex = /([a-zA-Zа-яА-ЯёЁ_][\wа-яА-ЯёЁ]*)\s*=\s*([^;\n]+)/g;

    const elseifRegex = /\belseif\b/g;
    let elseifMatch;
    while ((elseifMatch = elseifRegex.exec(text)) !== null) {
        const startPos = document.positionAt(elseifMatch.index);
        const endPos = document.positionAt(elseifMatch.index + elseifMatch[0].length);
        diagnostics.push({
            message: `'elseif' is not a valid keyword in Xylo. Use nested 'if' and 'else' instead.`,
            range: new vscode.Range(startPos, endPos),
            severity: vscode.DiagnosticSeverity.Error
        });
    }

    const switchRegex = /\bswitch\b[\s\S]*?\bend\b/g;
    let switchMatch;
    while ((switchMatch = switchRegex.exec(text)) !== null) {
        const switchBlock = switchMatch[0];
        const switchStartPos = document.positionAt(switchMatch.index);
        const switchEndPos = document.positionAt(switchMatch.index + switchMatch[0].length);

        if (!/\bdefault\b/.test(switchBlock)) {
            diagnostics.push({
                message: `'switch' block must contain a 'default' case.`,
                range: new vscode.Range(switchStartPos, switchEndPos),
                severity: vscode.DiagnosticSeverity.Error
            });
        }
    }

    let openBlocks = 0;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.match(/^(if|while|for|function|fun|class|try|switch)\b/)) {
            openBlocks++;
        }
        if (line.match(/^end\b/)) {
            openBlocks--;
        }
    }
    if (openBlocks > 0) {
        diagnostics.push({
            message: 'Missing "end" keyword',
            range: new vscode.Range(lines.length - 1, 0, lines.length - 1, 0),
            severity: vscode.DiagnosticSeverity.Error
        });
    }

    collection.set(document.uri, diagnostics);
}

function detectType(value) {
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        return 'string';
    }
    if (!isNaN(Number(value)) && value.trim() !== '') {
        return 'number';
    }
    if (value === 'true' || value === 'false') {
        return 'boolean';
    }
    if (value === 'nil') {
        return 'nil';
    }
    if (value === 'undefined') {
        return 'undefined';
    }
    if (value.match(/^(function|fun)\s*\(/)) {
        return 'function';
    }
    if (value.match(/^\{.*=.*\}$/)) {
        return 'table';
    }
    return 'unknown';
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};