type storage = int

type parameter =
  Increment of int
| Decrement of int
| Reset

// Two entrypoints

let add (store : storage) (delta : int) = store + delta
let sub (store : storage) (delta : int) = store - delta

(* Main access point that dispatches to the entrypoints according to
   the smart contract parameter. *)

let main (action, store : parameter * storage) : operation list * storage =
 [],    // No operations
 (match action with
   Increment (n) -> add store n
 | Decrement (n) -> sub store n
 | Reset         -> 0)