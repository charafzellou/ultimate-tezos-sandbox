#import "../src/main.mligo" "Main"

(* Tests for main access point *)

let initial_storage = 42

let test_initial_storage =
 let (taddr, _, _) = Test.originate Main.main initial_storage 0tez in
 assert (Test.get_storage taddr = initial_storage)

let test_increment =
 let (taddr, _, _) = Test.originate Main.main initial_storage 0tez in
 let contr = Test.to_contract taddr in
 let _ = Test.transfer_to_contract_exn contr (Increment 1) 1mutez in
 assert (Test.get_storage taddr = initial_storage + 1)