Data Source=184.168.194.60;Integrated Security=False;User ID=mattandbucs45;Connect Timeout=15;Encrypt=False;Packet Size=4096

<%
Dim oConn, oRs
Dim qry, connectstr
Dim db_name, db_username, db_userpassword
Dim db_server

db_server = "184.168.194.60"
db_name = "aspwedding"
db_username = "mattandbucs45"
db_userpassword = "24#Umpire45"
fieldname = "your_field"
tablename = "your_table"

connectstr = "Driver={MySQL ODBC 3.51 Driver};SERVER=" & db_server & ";DATABASE=" & db_name & ";UID=" & db_username & ";PWD=" & db_userpassword

Set oConn = Server.CreateObject("ADODB.Connection")
oConn.Open connectstr

qry = "SELECT * FROM " & tablename

Set oRS = oConn.Execute(qry)

if not oRS.EOF then
while not oRS.EOF
response.write ucase(fieldname) & ": " & oRs.Fields(fieldname) & "
"
oRS.movenext
wend
oRS.close
end if

Set oRs = nothing
Set oConn = nothing

%> 